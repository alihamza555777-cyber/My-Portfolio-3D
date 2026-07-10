"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { CERTIFICATIONS } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const CertificationsSection = () => {
  return (
    <SectionWrapper
      id="certifications"
      className="flex flex-col items-center justify-center min-h-[100vh] py-20 px-4"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="certifications"
          title="Certifications"
          desc="My technical certifications and credentials."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const CertificationCard = ({
  cert,
  index,
}: {
  cert: (typeof CERTIFICATIONS)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full cursor-pointer pointer-events-auto"
      >
        <Card
          className={cn(
            "h-full bg-card/60 backdrop-blur-md text-card-foreground border-border",
            "hover:border-primary/20 transition-all duration-300",
            "shadow-sm hover:shadow-md flex flex-col justify-between"
          )}
        >
          <CardHeader className="pb-4 flex-1">
            <div className="flex justify-between items-start gap-4">
              <CardTitle className="text-lg font-bold tracking-tight line-clamp-2">
                {cert.title}
              </CardTitle>
              <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
            </div>
            <div className="text-sm font-medium text-muted-foreground mt-2">
              {cert.issuer}
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between w-full">
              <Badge variant="secondary" className="font-mono text-[10px] font-normal px-2 py-0.5">
                {cert.date}
              </Badge>
              {cert.image && (
                <div className="relative overflow-hidden h-16 w-24 rounded-md border border-border bg-muted flex-shrink-0">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
};

export default CertificationsSection;
