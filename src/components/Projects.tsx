"use client";

import React from "react";
import SpotlightCard from "./SpotlightCard";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaLinux, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiKalilinux, SiPhp, SiMysql, SiPostgresql } from "react-icons/si";
import { BsRobot } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <main className="relative z-20 bg-[#0a0a0a] text-neutral-300 w-full overflow-hidden">
      
      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-32">
        <h3 className="text-sm tracking-widest uppercase text-neutral-500 mb-8">01. About</h3>
        <SpotlightCard className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                I am an Agentic AI & Backend Engineer specializing in building production AI Agents with LangChain, LangGraph, CrewAI, PydanticAI, RAG & n8n.
              </p>
              <p className="text-lg leading-relaxed text-neutral-400">
                Static automation is dead. I build Autonomous Perception-Action Loops — systems that don&apos;t just execute instructions, they reason through ambiguity, reflect on outcomes, and self-correct in real-time. I architect multi-agent systems where autonomous agents collaborate to solve non-linear problems — ensuring traceability, human-aligned execution, and enterprise-grade resilience.
              </p>
            </div>
            <div>
              <h4 className="text-white text-xl font-medium mb-6">Tech Arsenal</h4>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"><FaPython /> Python</span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"><BsRobot /> LangGraph & CrewAI</span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"><FaReact /> React</span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"><SiNextdotjs /> Next.js</span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"><SiTypescript /> TypeScript</span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"><FaDocker /> Docker</span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"><SiFastapi /> FastAPI</span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"><SiPhp /> PHP</span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"><SiMysql /> MySQL</span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"><SiPostgresql /> PostgreSQL</span>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-32 bg-black/40 border-y border-white/5">
        <h3 className="text-sm tracking-widest uppercase text-neutral-500 mb-8">02. Experience</h3>
        <div className="space-y-6">
          <SpotlightCard className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <div>
                <h4 className="text-2xl font-medium text-white">Agentic AI & Backend Engineer</h4>
                <p className="text-blue-400 mt-1">Independent / Production AI Systems</p>
              </div>
              <span className="text-neutral-500 mt-2 md:mt-0">2023 - Present</span>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-3xl">
              Architecting multi-agent systems using LangGraph, CrewAI, and deep reinforcement learning techniques. Bridging the gap between LLM capabilities and production-grade reliability across 80+ repositories. Developing autonomous DevOps systems, threat intelligence SOCs, and specialized revenue engines built on the Model Context Protocol (MCP).
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <div>
                <h4 className="text-2xl font-medium text-white">Full-Stack Software Engineer</h4>
                <p className="text-blue-400 mt-1">Various Enterprise Clients</p>
              </div>
              <span className="text-neutral-500 mt-2 md:mt-0">2021 - 2023</span>
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-3xl">
              Engineered highly scalable applications leveraging React, Next.js, and Python backends. Transitioned from static workflows to integrating early LLM pipelines, reducing data processing bottlenecks and enhancing user autonomy.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* Development Environment Section */}
      <section id="dev-env" className="max-w-5xl mx-auto px-6 py-32 border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="text-sm tracking-widest uppercase text-neutral-500 mb-8">03. Environment</h3>
          <SpotlightCard className="p-8 md:p-12 relative overflow-hidden group/card">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h4 className="text-2xl font-medium text-white mb-4">The Workstation</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  My development environment is built for maximum efficiency and a deep-focus aesthetic. I run on a foundation that prioritizes control and terminal velocity.
                </p>
                <ul className="space-y-6 text-neutral-300">
                  <li className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-blue-400">
                      <SiKalilinux className="text-xl" />
                    </span>
                    <div>
                      <strong className="block text-white">OS</strong>
                      <span className="text-sm text-neutral-400">Kali Linux</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-purple-400">
                      <FaCode className="text-xl" />
                    </span>
                    <div>
                      <strong className="block text-white">Vibe Code</strong>
                      <span className="text-sm text-neutral-400">Cursor</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-pink-400">
                      <BsRobot className="text-xl" />
                    </span>
                    <div>
                      <strong className="block text-white">AI Assistant</strong>
                      <span className="text-sm text-neutral-400">Antigravity</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col justify-center items-center relative">
                <motion.div 
                  className="w-56 h-56 rounded-full border border-white/5 flex items-center justify-center relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div 
                    className="absolute w-full h-full border-t-2 border-l-2 border-blue-500/30 rounded-full scale-110"
                    animate={{ rotate: -720 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute w-full h-full border-b-2 border-r-2 border-purple-500/30 rounded-full scale-90"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                
                {/* Static center text, absolutely positioned so it doesn't spin */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 tracking-wider">VIBE</span>
                  <span className="block text-sm text-neutral-500 uppercase tracking-widest mt-1">Code</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-32">
        <h3 className="text-sm tracking-widest uppercase text-neutral-500 mb-8">04. The Agentic Intelligence Lab</h3>
        <div className="grid md:grid-cols-2 gap-6">
          
          <a href="https://github.com/agentic-saim/AegisCore-DevOps" target="_blank" rel="noopener noreferrer">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between group/link">
              <div>
                <h4 className="text-2xl font-medium text-white mb-3 group-hover/link:text-blue-400 transition-colors">AegisCore-DevOps</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Autonomous Threat Intelligence & Mitigation. An agentic, cloud-native security platform that autonomously detects, analyzes, and mitigates threats using LLM-powered multi-agent reasoning.
                </p>
              </div>
              <div className="flex items-center gap-3 text-neutral-500 text-xl">
                <BsRobot />
                <SiFastapi />
                <FaDocker />
              </div>
            </SpotlightCard>
          </a>

          <a href="https://github.com/agentic-saim/DevOps-AI-Engineer-Agent" target="_blank" rel="noopener noreferrer">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between group/link">
              <div>
                <h4 className="text-2xl font-medium text-white mb-3 group-hover/link:text-blue-400 transition-colors">DevOps-AI-Engineer</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Autonomous DevOps Operating System. Orchestrates CI/CD, PR reviews, site reliability, architecture decisions, and incident management—without waking up human engineers.
                </p>
              </div>
              <div className="flex items-center gap-3 text-neutral-500 text-xl">
                <BsRobot />
                <FaPython />
                <FaDocker />
              </div>
            </SpotlightCard>
          </a>

          <a href="https://github.com/agentic-saim/Helix-AI-Orchestrator" target="_blank" rel="noopener noreferrer">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between group/link">
              <div>
                <h4 className="text-2xl font-medium text-white mb-3 group-hover/link:text-blue-400 transition-colors">Helix-AI-Orchestrator</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  TitanAI — Deep Code Auditing. Premium autonomous system for deep code auditing using LangGraph-based cyclic architecture with 11 specialized reasoning nodes.
                </p>
              </div>
              <div className="flex items-center gap-3 text-neutral-500 text-xl">
                <BsRobot />
                <FaPython />
              </div>
            </SpotlightCard>
          </a>

          <a href="https://github.com/agentic-saim/AI-powered-Sales-CRM-Agent" target="_blank" rel="noopener noreferrer">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between group/link">
              <div>
                <h4 className="text-2xl font-medium text-white mb-3 group-hover/link:text-blue-400 transition-colors">SalesIQ — Revenue Engine</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  A specialized revenue engine built on Model Context Protocol (MCP), powered by LangGraph + CrewAI, automating the high-friction parts of the sales lifecycle.
                </p>
              </div>
              <div className="flex items-center gap-3 text-neutral-500 text-xl">
                <BsRobot />
                <FaPython />
              </div>
            </SpotlightCard>
          </a>

          <a href="https://github.com/agentic-saim/ClaimOS" target="_blank" rel="noopener noreferrer">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between group/link">
              <div>
                <h4 className="text-2xl font-medium text-white mb-3 group-hover/link:text-blue-400 transition-colors">ClaimOS</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Enterprise-grade AI system that transforms insurance claims processing from a 4-day manual workflow into a 4-minute automated decision pipeline.
                </p>
              </div>
              <div className="flex items-center gap-3 text-neutral-500 text-xl">
                <BsRobot />
                <FaPython />
                <SiFastapi />
              </div>
            </SpotlightCard>
          </a>

          <a href="https://github.com/agentic-saim/Social-Media-Autopilot-Agent-with-MCP" target="_blank" rel="noopener noreferrer">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between group/link">
              <div>
                <h4 className="text-2xl font-medium text-white mb-3 group-hover/link:text-blue-400 transition-colors">SocialPilot</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Enterprise-grade autonomous system handling the entire lifecycle of social media marketing—from trend discovery to content creation, safety validation, and automated scheduling.
                </p>
              </div>
              <div className="flex items-center gap-3 text-neutral-500 text-xl">
                <BsRobot />
                <FaPython />
              </div>
            </SpotlightCard>
          </a>

        </div>
      </section>

      {/* Full Stack Projects Section */}
      <section id="fullstack" className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5">
        <h3 className="text-sm tracking-widest uppercase text-neutral-500 mb-8">05. Full Stack & Web Engineering</h3>
        <div className="grid md:grid-cols-2 gap-6">
          
          <a href="https://github.com/agentic-saim/QuantumOps-AI" target="_blank" rel="noopener noreferrer">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between group/link">
              <div>
                <h4 className="text-2xl font-medium text-white mb-3 group-hover/link:text-blue-400 transition-colors">QuantumOps-AI</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Backend-first enterprise SaaS platform for intelligent task orchestration and AI-driven business process execution with event-driven architecture.
                </p>
              </div>
              <div className="flex items-center gap-3 text-neutral-500 text-xl">
                <SiPostgresql />
                <SiNextdotjs />
                <FaDocker />
              </div>
            </SpotlightCard>
          </a>

          <a href="https://github.com/agentic-saim/OmniMetrics-AI" target="_blank" rel="noopener noreferrer">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between group/link">
              <div>
                <h4 className="text-2xl font-medium text-white mb-3 group-hover/link:text-blue-400 transition-colors">OmniMetrics-AI</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  High-performance multi-tenant SaaS analytics platform delivering real-time insights, predictive analytics, and intelligent reporting at enterprise scale.
                </p>
              </div>
              <div className="flex items-center gap-3 text-neutral-500 text-xl">
                <FaPython />
                <SiMysql />
                <SiFastapi />
              </div>
            </SpotlightCard>
          </a>

          <a href="https://github.com/agentic-saim/astra-ecommerce" target="_blank" rel="noopener noreferrer">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between group/link">
              <div>
                <h4 className="text-2xl font-medium text-white mb-3 group-hover/link:text-blue-400 transition-colors">Astra E-Commerce</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  A high-performance headless e-commerce storefront. Features cinematic product reveals, optimized cart drawer, and robust backend integration.
                </p>
              </div>
              <div className="flex items-center gap-3 text-neutral-500 text-xl">
                <SiPhp />
                <SiMysql />
                <FaReact />
              </div>
            </SpotlightCard>
          </a>

          <a href="https://github.com/agentic-saim/quantum-web3" target="_blank" rel="noopener noreferrer">
            <SpotlightCard className="p-8 h-full flex flex-col justify-between group/link">
              <div>
                <h4 className="text-2xl font-medium text-white mb-3 group-hover/link:text-blue-400 transition-colors">Quantum Web Portal</h4>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  A full-stack web application interface featuring glassmorphic cards, secure authentication, and complex data visualization APIs.
                </p>
              </div>
              <div className="flex items-center gap-3 text-neutral-500 text-xl">
                <FaNodeJs />
                <SiPostgresql />
                <SiTypescript />
              </div>
            </SpotlightCard>
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} Agentic Saim. All rights reserved.</p>
        <p className="mt-2">Architecting Autonomous Perception-Action Loops.</p>
      </footer>
    </main>
  );
}
