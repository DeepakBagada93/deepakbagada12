
// src/components/image-upload-section.tsx
"use client";

import { useState, useRef, type ChangeEvent } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { UploadCloud, XCircle } from 'lucide-react';
import { useScrollEffect } from '@/hooks/use-scroll-effect';

export default function ImageUploadSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useScrollEffect(titleRef);
  useScrollEffect(cardRef, { effectClasses: ['fade-in', 'slide-in-from-bottom-12'], duration: '900ms' });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          variant: "destructive",
          title: "File Too Large",
          description: "Please select an image smaller than 5MB.",
        });
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      toast({
        title: "Upload Initiated",
        description: `"${selectedFile.name}" would be uploaded. (This is a demo functionality)`,
      });
      console.log("Simulating upload of file:", selectedFile.name);
      // In a real app, you would send the file to a server here.
      // For demo purposes, we can clear the selection after "upload".
      // handleRemoveImage(); 
    } else {
      toast({
        variant: "destructive",
        title: "No File Selected",
        description: "Please select an image file to upload.",
      });
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; 
    }
  };

  return (
    <section id="image-upload" ref={sectionRef} className="bg-background/70 backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <div
          ref={titleRef}
          className="flex flex-col items-center space-y-4 text-center mb-12 opacity-0 transform"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm">
            Interactive Demo
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
            Image Upload Component
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Experience a simple image upload functionality. Select an image to see a preview and simulate an upload. This demonstrates handling file inputs and basic client-side image preview.
          </p>
        </div>

        <div ref={cardRef} className="max-w-2xl mx-auto opacity-0 transform">
          <Card className="bg-card/80 shadow-xl hover:shadow-primary/30 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Upload Your Image</CardTitle>
              <CardDescription>Select an image file (e.g., PNG, JPG, GIF) up to 5MB.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="image-upload-input" className="text-base font-medium">Choose Image File</Label>
                <Input
                  id="image-upload-input"
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30 cursor-pointer"
                />
              </div>

              {previewUrl && selectedFile && (
                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-foreground">Preview:</h4>
                  <div className="relative group aspect-video w-full rounded-md overflow-hidden border border-border shadow-inner bg-muted/10">
                    <Image
                      src={previewUrl}
                      alt={selectedFile.name || "Selected image preview"}
                      layout="fill"
                      objectFit="contain"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 h-8 w-8 rounded-full"
                      onClick={handleRemoveImage}
                      aria-label="Remove image"
                    >
                      <XCircle className="h-5 w-5" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Filename: {selectedFile.name} | Size: {Math.round(selectedFile.size / 1024)} KB
                  </p>
                </div>
              )}

              {!previewUrl && (
                <div className="flex flex-col items-center justify-center h-48 w-full border-2 border-dashed border-border/50 rounded-md bg-card/50 p-4">
                  <UploadCloud className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
                  <p className="text-center text-muted-foreground">No image selected.</p>
                  <p className="text-xs text-muted-foreground">Your image preview will appear here.</p>
                </div>
              )}

              <Button onClick={handleUpload} size="lg" className="w-full" disabled={!selectedFile}>
                <UploadCloud className="mr-2 h-5 w-5" /> Simulate Upload
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
