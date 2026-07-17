import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Nav />
      <main id="content">
        <section className="section hero" style={{ paddingBlock: 'clamp(48px, 8vw, var(--gap-xl))' }}>
          <div className="container">
            <p className="eyebrow">Our Mission</p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)',
              lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)',
              margin: '0 0 var(--gap-md)', fontWeight: 600, maxWidth: '20ch',
            }}>The AI Prompting Playbook Mission</h1>
            <p className="lead" style={{
              fontSize: 'var(--fs-lead)', color: 'var(--fg-2)',
              maxWidth: '52ch', margin: '0 0 var(--gap-lg)', lineHeight: 1.65,
            }}>
              AI Prompting Playbook is a searchable library of enterprise-ready prompts — structured for HR, marketing, content, and product teams who need reproducible model behavior, not one-off demos.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--gap-sm)' }}>
              <Link to="/category/hr" className="btn btn-primary">Explore niches</Link>
              <Link to="/contact" className="btn btn-secondary">Talk to us</Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBlock: 'clamp(48px, 8vw, var(--gap-xl))' }}>
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: 'var(--gap-lg)' }}>How we build</p>
            <div className="principles" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap-md)',
            }}>
              {[
                { num: '01 · Audit', title: 'Every prompt is reviewed', desc: 'Role, constraints, variables, and failure paths are checked before a prompt appears in the library. Drafts stay private until they pass.' },
                { num: '02 · Niche', title: 'Domain over generic', desc: 'We organize by job to be done — job descriptions, SEO briefs, course outlines — so teams find production patterns, not generic chat starters.' },
                { num: '03 · Ship', title: 'Copy, adapt, deploy', desc: 'Each blueprint is copy-ready with clear variables. Swap context, keep structure, and move from research to ops without rewriting from scratch.' },
              ].map(p => (
                <article key={p.num} className="principle-card" style={{
                  background: 'var(--surface)', boxShadow: 'var(--elev-raised)',
                  borderRadius: 'var(--radius-lg)', padding: 'var(--gap-lg)',
                  display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>{p.num}</span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 18,
                    fontWeight: 600, letterSpacing: '-0.02em', margin: 0,
                  }}>{p.title}</h3>
                  <p style={{ margin: 0, color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6 }}>{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
