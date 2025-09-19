function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>&copy; {new Date().getFullYear()} Abdullah Al Hammadi. Crafted with React and plenty of care.</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer
