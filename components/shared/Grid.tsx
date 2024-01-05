export const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="mt-12 grid gap-3 gap-y-9 xs:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]"
    >
      {children}
    </section>
  )
}