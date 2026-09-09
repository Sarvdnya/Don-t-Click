"use client";

import { useRef, useCallback, type MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import type { ProjectVisualType } from "@/data/projects";

type ProjectVisualProps = {
  visualType: ProjectVisualType;
};

export default function ProjectVisual({ visualType }: ProjectVisualProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (reduce) return;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--vx", `${x * 12}px`);
      el.style.setProperty("--vy", `${y * 12}px`);
      el.style.setProperty("--vx2", `${x * -6}px`);
      el.style.setProperty("--vy2", `${y * -6}px`);
      el.style.setProperty("--vx3", `${x * 18}px`);
      el.style.setProperty("--vy3", `${y * 18}px`);
    },
    [reduce]
  );

  const onLeave = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--vx", "0px");
    el.style.setProperty("--vy", "0px");
    el.style.setProperty("--vx2", "0px");
    el.style.setProperty("--vy2", "0px");
    el.style.setProperty("--vx3", "0px");
    el.style.setProperty("--vy3", "0px");
  }, []);

  return (
    <div
      ref={containerRef}
      className="project-visual"
      role="img"
      aria-label="Stylized visual representation of the project interface"
      data-cursor="view"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {visualType === "ai-docs" && <AiDocsVisual />}
      {visualType === "landing-page" && <LandingPageVisual />}
      {visualType === "chrome-extension" && <ChromeExtensionVisual />}
      {visualType === "portfolio" && <PortfolioVisual />}
    </div>
  );
}

function AiDocsVisual() {
  return (
    <div className="pv-ai-docs">
      <div className="pv-ai-docs__sidebar">
        <div className="pv-ai-docs__sidebar-icon" />
        <div className="pv-ai-docs__sidebar-icon pv-ai-docs__sidebar-icon--active" />
        <div className="pv-ai-docs__sidebar-icon" />
        <div className="pv-ai-docs__sidebar-icon" />
        <div className="pv-ai-docs__sidebar-spacer" />
        <div className="pv-ai-docs__sidebar-dot" />
      </div>
      <div className="pv-ai-docs__main pv-layer-1">
        <div className="pv-ai-docs__doc-header">
          <div className="pv-ai-docs__doc-title-bar" />
          <div className="pv-ai-docs__doc-meta" />
        </div>
        <div className="pv-ai-docs__doc-content">
          <div className="pv-ai-docs__doc-line pv-ai-docs__doc-line--w100" />
          <div className="pv-ai-docs__doc-line pv-ai-docs__doc-line--w80" />
          <div className="pv-ai-docs__doc-line pv-ai-docs__doc-line--w90" />
          <div className="pv-ai-docs__doc-line pv-ai-docs__doc-line--w60" />
          <div className="pv-ai-docs__doc-line pv-ai-docs__doc-line--w100" />
          <div className="pv-ai-docs__doc-line pv-ai-docs__doc-line--w45" />
        </div>
        <div className="pv-ai-docs__floating-preview pv-layer-3">
          <div className="pv-ai-docs__preview-label">
            <span className="pv-ai-docs__preview-dot" />
            AI ANALYSIS
          </div>
          <div className="pv-ai-docs__preview-line pv-ai-docs__preview-line--w90" />
          <div className="pv-ai-docs__preview-line pv-ai-docs__preview-line--w70" />
          <div className="pv-ai-docs__preview-line pv-ai-docs__preview-line--w80" />
        </div>
      </div>
      <div className="pv-ai-docs__chat pv-layer-2">
        <div className="pv-ai-docs__chat-header">
          CONTEXTUAL AI
        </div>
        <div className="pv-ai-docs__chat-messages">
          <div className="pv-ai-docs__chat-msg pv-ai-docs__chat-msg--user">
            <div className="pv-ai-docs__chat-line pv-ai-docs__chat-line--w80" />
            <div className="pv-ai-docs__chat-line pv-ai-docs__chat-line--w50" />
          </div>
          <div className="pv-ai-docs__chat-msg pv-ai-docs__chat-msg--ai">
            <div className="pv-ai-docs__chat-line pv-ai-docs__chat-line--w90" />
            <div className="pv-ai-docs__chat-line pv-ai-docs__chat-line--w70" />
            <div className="pv-ai-docs__chat-line pv-ai-docs__chat-line--w60" />
          </div>
        </div>
        <div className="pv-ai-docs__chat-input">
          <span>Ask about this document...</span>
          <div className="pv-ai-docs__chat-send" />
        </div>
      </div>
    </div>
  );
}

function LandingPageVisual() {
  return (
    <div className="pv-landing">
      <div className="pv-landing__browser">
        <div className="pv-landing__browser-bar">
          <div className="pv-landing__browser-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="pv-landing__browser-url">product-landing.dev</div>
          <div className="pv-landing__browser-actions" />
        </div>
        <div className="pv-landing__content pv-layer-1">
          <div className="pv-landing__hero-section">
            <div className="pv-landing__hero-tag">LAUNCHING SOON</div>
            <div className="pv-landing__hero-title">
              <div className="pv-landing__title-line pv-landing__title-line--w100" />
              <div className="pv-landing__title-line pv-landing__title-line--w70" />
            </div>
            <div className="pv-landing__hero-sub">
              <div className="pv-landing__sub-line pv-landing__sub-line--w90" />
              <div className="pv-landing__sub-line pv-landing__sub-line--w60" />
            </div>
            <div className="pv-landing__cta-row">
              <div className="pv-landing__cta-btn pv-landing__cta-btn--primary" />
              <div className="pv-landing__cta-btn pv-landing__cta-btn--ghost" />
            </div>
          </div>
          <div className="pv-landing__features pv-layer-2">
            <div className="pv-landing__feature">
              <div className="pv-landing__feature-icon" />
              <div className="pv-landing__feature-lines">
                <div className="pv-landing__feature-line pv-landing__feature-line--w80" />
                <div className="pv-landing__feature-line pv-landing__feature-line--w50" />
              </div>
            </div>
            <div className="pv-landing__feature">
              <div className="pv-landing__feature-icon" />
              <div className="pv-landing__feature-lines">
                <div className="pv-landing__feature-line pv-landing__feature-line--w70" />
                <div className="pv-landing__feature-line pv-landing__feature-line--w60" />
              </div>
            </div>
            <div className="pv-landing__feature">
              <div className="pv-landing__feature-icon" />
              <div className="pv-landing__feature-lines">
                <div className="pv-landing__feature-line pv-landing__feature-line--w90" />
                <div className="pv-landing__feature-line pv-landing__feature-line--w40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChromeExtensionVisual() {
  return (
    <div className="pv-chrome">
      <div className="pv-chrome__browser">
        <div className="pv-chrome__browser-bar">
          <div className="pv-chrome__browser-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="pv-chrome__browser-url">medium.com/article/...</div>
          <div className="pv-chrome__browser-ext-icon" />
        </div>
        <div className="pv-chrome__page pv-layer-1">
          <div className="pv-chrome__article">
            <div className="pv-chrome__article-category" />
            <div className="pv-chrome__article-title">
              <div className="pv-chrome__article-title-line pv-chrome__article-title-line--w100" />
              <div className="pv-chrome__article-title-line pv-chrome__article-title-line--w75" />
            </div>
            <div className="pv-chrome__article-meta" />
            <div className="pv-chrome__article-body">
              <div className="pv-chrome__article-line pv-chrome__article-line--w100" />
              <div className="pv-chrome__article-line pv-chrome__article-line--w90" />
              <div className="pv-chrome__article-line pv-chrome__article-line--w100" />
              <div className="pv-chrome__article-line pv-chrome__article-line--w80" />
              <div className="pv-chrome__article-line pv-chrome__article-line--w95" />
              <div className="pv-chrome__article-line pv-chrome__article-line--w70" />
            </div>
          </div>
          <div className="pv-chrome__panel pv-layer-2">
            <div className="pv-chrome__panel-header">
              <span className="pv-chrome__panel-icon" />
              BLOG AUTOMATION
            </div>
            <div className="pv-chrome__panel-section">
              <div className="pv-chrome__panel-label">SUMMARY</div>
              <div className="pv-chrome__panel-line pv-chrome__panel-line--w90" />
              <div className="pv-chrome__panel-line pv-chrome__panel-line--w70" />
              <div className="pv-chrome__panel-line pv-chrome__panel-line--w80" />
            </div>
            <div className="pv-chrome__panel-section">
              <div className="pv-chrome__panel-label">KEY POINTS</div>
              <div className="pv-chrome__panel-point">
                <span className="pv-chrome__panel-bullet" />
                <div className="pv-chrome__panel-line pv-chrome__panel-line--w80" />
              </div>
              <div className="pv-chrome__panel-point">
                <span className="pv-chrome__panel-bullet" />
                <div className="pv-chrome__panel-line pv-chrome__panel-line--w60" />
              </div>
              <div className="pv-chrome__panel-point">
                <span className="pv-chrome__panel-bullet" />
                <div className="pv-chrome__panel-line pv-chrome__panel-line--w70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioVisual() {
  return (
    <div className="pv-portfolio">
      <div className="pv-portfolio__browser">
        <div className="pv-portfolio__browser-bar pv-layer-2">
          <div className="pv-portfolio__browser-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="pv-portfolio__browser-url">portfolio.dev</div>
          <div className="pv-portfolio__browser-avatar" />
        </div>
        <div className="pv-portfolio__hero pv-layer-1">
          <div className="pv-portfolio__label">PORTFOLIO — 2026</div>
          <div className="pv-portfolio__wordmark">SARVDNYA</div>
          <div className="pv-portfolio__sub">
            <div className="pv-portfolio__sub-line pv-portfolio__sub-line--w90" />
            <div className="pv-portfolio__sub-line pv-portfolio__sub-line--w60" />
          </div>
          <div className="pv-portfolio__cta-row">
            <div className="pv-portfolio__cta pv-portfolio__cta--primary" />
            <div className="pv-portfolio__cta pv-portfolio__cta--ghost" />
          </div>
          <div className="pv-portfolio__index">01 / 05</div>
        </div>
      </div>
    </div>
  );
}
