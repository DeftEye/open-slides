import type { ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

import lockupDark from '@assets/LOCKUP_HORIZONTAL_2D_DARK.svg';
import titleSlideBg from '@assets/title_slide.svg';
import cursorLight from '@assets/cursor_light.svg';
import cursorDark from '@assets/cursor_dark.svg';

export const design: DesignSystem = {
  palette: { bg: '#F7F7F4', text: '#26251E', accent: '#F54E00' },
  fonts: {
    display: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
    body: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
  },
  typeScale: { hero: 96, body: 34 },
  radius: 4,
};

const font = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';

const shell = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box' as const,
  position: 'relative' as const,
  fontFamily: 'var(--osd-font-body)',
};

const CursorLogo = ({ onDark = false }: { onDark?: boolean }) => (
  <img
    src={onDark ? cursorDark : cursorLight}
    alt="Cursor"
    style={{ position: 'absolute', top: 48, right: 48, height: 44, width: 'auto', zIndex: 2 }}
  />
);

const TitleLockup = () => (
  <img
    src={lockupDark}
    alt="Cursor"
    style={{ position: 'absolute', top: 48, left: 110, height: 124, width: 'auto', zIndex: 1 }}
  />
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#9B9A92',
      marginBottom: 16,
      fontFamily: font,
    }}
  >
    {children}
  </div>
);

const Title = ({ children }: { children: ReactNode }) => (
  <h1
    style={{
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      margin: 0,
      color: 'var(--osd-text)',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    {children}
  </h1>
);

const HeroTitle = ({
  children,
  color = '#EDECEC',
}: {
  children: ReactNode;
  color?: string;
}) => (
  <h1
    style={{
      fontSize: 96,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
      margin: 0,
      color,
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    {children}
  </h1>
);

const Body = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingBottom: 24,
    }}
  >
    {children}
  </div>
);

const contentPage = {
  ...shell,
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  padding: 110,
  display: 'flex',
  flexDirection: 'column' as const,
};

const Tile = ({ kicker, children }: { kicker: string; children: ReactNode }) => (
  <div
    style={{
      background: '#FFFFFF',
      border: '2px solid #E3E2DD',
      borderTop: '6px solid var(--osd-accent)',
      borderRadius: 'var(--osd-radius)',
      padding: '28px 32px',
      height: '100%',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#9B9A92',
        marginBottom: 16,
        fontFamily: font,
      }}
    >
      {kicker}
    </div>
    <div style={{ fontSize: 32, lineHeight: 1.35, color: '#3E3D36', fontFamily: font }}>{children}</div>
  </div>
);

const SquareBullet = ({ children }: { children: ReactNode }) => (
  <li
    style={{
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      fontSize: 34,
      lineHeight: 1.35,
      color: 'var(--osd-text)',
      marginBottom: 28,
      listStyle: 'none',
      fontFamily: font,
    }}
  >
    <span
      style={{
        width: 12,
        height: 12,
        marginTop: 16,
        flexShrink: 0,
        background: 'var(--osd-accent)',
      }}
    />
    <span>{children}</span>
  </li>
);

const Stat = ({ number, label }: { number: string; label: string }) => (
  <div
    style={{
      background: '#FFFFFF',
      border: '2px solid #E3E2DD',
      borderRadius: 'var(--osd-radius)',
      padding: '36px 40px',
      boxSizing: 'border-box',
      height: '100%',
    }}
  >
    <div
      style={{
        fontSize: 80,
        fontWeight: 700,
        color: 'var(--osd-accent)',
        lineHeight: 1,
        marginBottom: 16,
        fontFamily: 'var(--osd-font-display)',
      }}
    >
      {number}
    </div>
    <div
      style={{
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--osd-text)',
        fontFamily: font,
      }}
    >
      {label}
    </div>
  </div>
);

const FlowCard = ({ step, detail }: { step: string; detail: string }) => (
  <div
    style={{
      flex: 1,
      background: '#FFFFFF',
      border: '2px solid #E3E2DD',
      borderTop: '6px solid var(--osd-accent)',
      borderRadius: 'var(--osd-radius)',
      padding: '32px 28px',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        fontSize: 36,
        fontWeight: 700,
        color: 'var(--osd-text)',
        marginBottom: 12,
        fontFamily: 'var(--osd-font-display)',
        letterSpacing: '-0.02em',
      }}
    >
      {step}
    </div>
    <div style={{ fontSize: 28, lineHeight: 1.35, color: '#3E3D36', fontFamily: font }}>{detail}</div>
  </div>
);

const Arrow = () => (
  <span
    style={{
      width: 48,
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 36,
      color: 'var(--osd-accent)',
      flexShrink: 0,
    }}
  >
    →
  </span>
);

const Cover: Page = () => (
  <div
    style={{
      ...shell,
      background: '#14120B',
      color: '#FFFFFF',
      padding: 110,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}
  >
    <img
      src={titleSlideBg}
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
    />
    <TitleLockup />
    <div style={{ position: 'relative', zIndex: 1, marginTop: 80 }}>
      <HeroTitle color="#FFFFFF">How to build slides</HeroTitle>
      <p style={{ margin: '28px 0 0', fontSize: 40, fontWeight: 500, lineHeight: 1.25, color: '#FFFFFF' }}>
        One React file. A fixed canvas. No new dependencies.
      </p>
    </div>
  </div>
);

const FileContract: Page = () => (
  <div style={contentPage}>
    <CursorLogo />
    <Eyebrow>Start here</Eyebrow>
    <Title>One folder, one file</Title>
    <Body>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28, alignItems: 'stretch' }}>
        <Tile kicker="Folder">slides/&lt;id&gt;/</Tile>
        <Tile kicker="Entry">index.tsx exports the pages</Tile>
        <Tile kicker="Assets">Images live in assets/</Tile>
      </div>
    </Body>
  </div>
);

const Canvas: Page = () => (
  <div style={contentPage}>
    <CursorLogo />
    <Eyebrow>The canvas</Eyebrow>
    <Title>Draw at 1920 × 1080</Title>
    <Body>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
        <Stat number="1920" label="Width" />
        <Stat number="1080" label="Height" />
        <Stat number="110" label="Edge padding" />
      </div>
      <p style={{ margin: '36px 0 0', fontSize: 32, lineHeight: 1.4, color: '#5C5B54' }}>
        Use pixels. Anything past the canvas is cropped.
      </p>
    </Body>
  </div>
);

const OneIdea: Page = () => (
  <div style={contentPage}>
    <CursorLogo />
    <Eyebrow>Layout</Eyebrow>
    <Title>One idea per page</Title>
    <Body>
      <ul style={{ margin: 0, padding: 0 }}>
        <SquareBullet>A heading, then a short list or one visual</SquareBullet>
        <SquareBullet>Keep each bullet on a single line</SquareBullet>
        <SquareBullet>Split the page before you shrink the type</SquareBullet>
      </ul>
    </Body>
  </div>
);

const Tokens: Page = () => (
  <div style={contentPage}>
    <CursorLogo />
    <Eyebrow>Design</Eyebrow>
    <Title>Tokens live in design</Title>
    <Body>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <Tile kicker="Declare">palette, fonts, and a type scale</Tile>
        <Tile kicker="Consume">var(--osd-bg), text, and accent</Tile>
      </div>
    </Body>
  </div>
);

const Editable: Page = () => (
  <div style={contentPage}>
    <CursorLogo />
    <Eyebrow>Export</Eyebrow>
    <Title>Cards stay editable text</Title>
    <Body>
      <ul style={{ margin: 0, padding: 0 }}>
        <SquareBullet>Give every card a fill lighter than the page</SquareBullet>
        <SquareBullet>Put the words inside that same box</SquareBullet>
        <SquareBullet>Write each card out. Do not map a list.</SquareBullet>
      </ul>
    </Body>
  </div>
);

const Loop: Page = () => (
  <div style={contentPage}>
    <CursorLogo />
    <Eyebrow>The loop</Eyebrow>
    <Title>Write, preview, comment</Title>
    <Body>
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 8 }}>
        <FlowCard step="Write" detail="slides/&lt;id&gt;/index.tsx" />
        <Arrow />
        <FlowCard step="Preview" detail="localhost:5173" />
        <Arrow />
        <FlowCard step="Comment" detail="Click any element" />
        <Arrow />
        <FlowCard step="Apply" detail="apply-comments" />
      </div>
    </Body>
  </div>
);

const Boundaries: Page = () => (
  <div style={contentPage}>
    <CursorLogo />
    <Eyebrow>Hard rules</Eyebrow>
    <Title>Leave the rest alone</Title>
    <Body>
      <ul style={{ margin: 0, padding: 0 }}>
        <SquareBullet>Do not edit package.json</SquareBullet>
        <SquareBullet>Do not edit open-slide.config.ts</SquareBullet>
        <SquareBullet>Do not edit slides you were not asked to touch</SquareBullet>
        <SquareBullet>Do not add dependencies</SquareBullet>
      </ul>
    </Body>
  </div>
);

const Closer: Page = () => (
  <div
    style={{
      ...shell,
      background: '#14120B',
      color: '#EDECEC',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <CursorLogo onDark />
    <HeroTitle>Open index.tsx</HeroTitle>
    <p style={{ margin: '28px 0 0', fontSize: 40, lineHeight: 1.3, color: '#969592', maxWidth: 1400 }}>
      The dev server hot-reloads the page as you write it.
    </p>
  </div>
);

export const meta: SlideMeta = {
  title: 'How to build slides',
  theme: 'cursor-brand',
  createdAt: '2026-10-21T14:17:07.886Z',
};

export default [
  Cover,
  FileContract,
  Canvas,
  OneIdea,
  Tokens,
  Editable,
  Loop,
  Boundaries,
  Closer,
] satisfies Page[];
