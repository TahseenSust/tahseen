export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
      <div className="mx-auto max-w-4xl px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {currentYear} Tahseen Rasheed Chowdhury. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tahseenchowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tahseenrchowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tahseenrchowdhury@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
