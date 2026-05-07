// The studio injects its own styles, so we keep this layout to a transparent
// pass-through that suppresses the marketing globals.css noise overlay.
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', zIndex: 5, minHeight: '100vh', background: '#fff', color: '#1A1A22' }}>
      {children}
    </div>
  )
}
