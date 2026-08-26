export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 py-6 text-xs text-muted-foreground">
      © {currentYear} Tahseen Rasheed Chowdhury
    </footer>
  )
}
