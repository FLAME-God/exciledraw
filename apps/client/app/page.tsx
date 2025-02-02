"use client";

import {
  ArrowRight,
  Brush,
  Share2,
  Shapes,
  Layers,
  Github,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight text-primary mb-6">
              ExcileDraw
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A powerful and intuitive drawing application for creating
              beautiful diagrams, sketches, and illustrations right in your
              browser.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/draw"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start Drawing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/yourusername/exciledraw"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent transition-colors"
              >
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Link>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brush className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Intuitive Drawing Tools
              </h3>
              <p className="text-muted-foreground">
                Powerful brush engine with customizable settings for precise
                control over your artwork.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shapes className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Shape Library</h3>
              <p className="text-muted-foreground">
                Extensive collection of shapes and templates to speed up your
                design process.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Layer Management</h3>
              <p className="text-muted-foreground">
                Organize your artwork with powerful layer controls and grouping
                options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start creating?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who use ExcileDraw to bring their ideas
            to life.
          </p>
          <Link
            href="/draw"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg"
          >
            Launch ExcileDraw <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 ExcileDraw. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="https://github.com/yourusername/exciledraw"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
