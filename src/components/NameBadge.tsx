type nameBadgeProp = {
  name: string,
  greeting?: string
}
export default function NameBadge({ name }: nameBadgeProp) {
  return (
    <section className={`badge uppercase`}>
      <header className="badge-header">
        <h1 className="text-5xl">HELLO</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  )
}
