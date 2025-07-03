import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // In a real application, you would send an email here
      console.log("New contact message:", message);
      
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          error: "Validation error", 
          details: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // Download CV endpoint
  app.get("/api/download-cv", (req, res) => {
    try {
      const cvPath = path.resolve(process.cwd(), "attached_assets", "Vajeenth's CV01_1751522730454.pdf");
      
      if (fs.existsSync(cvPath)) {
        res.download(cvPath, "Vajeenth_Vasanthakumar_CV.pdf", (err) => {
          if (err) {
            console.error("Error downloading CV:", err);
            res.status(500).json({ error: "Error downloading CV" });
          }
        });
      } else {
        res.status(404).json({ error: "CV file not found" });
      }
    } catch (error) {
      console.error("CV download error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
