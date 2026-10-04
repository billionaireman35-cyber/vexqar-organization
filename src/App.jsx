import { NavLink, Route, Routes } from 'react-router-dom'
import {
  Activity,
  ArrowUpRight,
  Blocks,
  BookOpen,
  ChevronRight,
  CircleDollarSign,
  Code2,
  Cpu,
  FileText,
  Globe2,
  Info,
  LayoutDashboard,
  Menu,
  Network,
  ShieldCheck,
  Wallet,
  X,
} from 'lucide-react'
import { useState } from 'react'
import './App.css'

const modules = [
  {
    name: 'Wallet',
    description: 'Digital asset management and transaction infrastructure.',
    status: 'BUILDING',
    icon: Wallet,
    to: '/wallet',
  },
  {
    name: 'DeFi',
    description: 'Liquidity, swaps, protocol markets and programmable finance.',
    status: 'BUILDING',
    icon: CircleDollarSign,
    to: '/defi',
  },
  {
    name: 'Applications',
    description: 'An ecosystem for VEXQAR-native and third-party applications.',
    status: 'PLANNED',
    icon: Blocks,
    to: '/applications',
  },
  {
    name: 'Compute & Intelligence',
    description: 'Future computing and intelligent automation infrastructure.',
    status: 'RESEARCH',
    icon: Cpu,
    to: '/roadmap',
  },
  {
    name: 'Developer Infrastructure',
    description: 'Tools, interfaces and resources for building on VEXQAR.',
    status: 'PLANNED',
    icon: Code2,
    to: '/documentation',
  },
  {
    name: 'Network',
    description: 'Long-term research toward broader network independence.',
    status: 'RESEARCH',
    icon: Network,
    to: '/roadmap',
  },
]

const navigation = [
  { label: 'Overview', to: '/', icon: LayoutDashboard },
  { label: 'VXR', to: '/vxr', icon: CircleDollarSign },
  { label: 'Wallet', to: '/wallet', icon: Wallet },
  { label: 'DeFi', to: '/defi', icon: Activity },
  { label: 'Architecture', to: '/architecture', icon: Network },
  { label: 'Security', to: '/security', icon: ShieldCheck },
  { label: 'Documentation', to: '/documentation', icon: BookOpen },
  { label: 'Roadmap', to: '/roadmap', icon: Globe2 },
]

function StatusBadge({ status }) {
  return <span className={`status-badge status-${status.toLowerCase()}`}>{status}</span>
}

function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
      <div className="brand">
        <div className="brand-mark">
          <img src="/brand/vexqar-mark.svg" alt="VEXQAR" />
        </div>
        <div>
          <strong>VEXQAR</strong>
          <small>ORGANIZATION</small>
        </div>
      </div>

      <nav className="navigation" aria-label="Platform navigation">
        <div className="nav-label">PLATFORM</div>
        {navigation.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <Icon size={17} strokeWidth={1.8} />
            <span>{label}</span>
          </NavLink>
        ))}

        <div className="nav-label nav-label-information">INFORMATION</div>
        <NavLink
          to="/about"
          end
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={onClose}
        >
          <Info size={17} strokeWidth={1.8} />
          <span>About VEXQAR</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="company-signature">
          <span>POWERED BY</span>
          <strong>GOLDX TECHNOLOGIES LTD</strong>
        </div>
        <a
          className="external-link"
          href="https://polygonscan.com/address/0x9701053faF5E6fE5fC27662002Da4b0017026067"
          target="_blank"
          rel="noreferrer"
        >
          Contract Explorer
          <ArrowUpRight size={14} />
        </a>
      </div>
    </aside>
  )
}

function Topbar({ onMenu }) {
  return (
    <header className="topbar">
      <button className="mobile-menu" type="button" onClick={onMenu} aria-label="Open navigation">
        <Menu size={21} />
      </button>
      <div className="topbar-context">
        <span>VEXQAR PLATFORM</span>
        <ChevronRight size={14} />
        <strong>Overview</strong>
      </div>
      <div className="topbar-right">
        <span className="live-pill">
          <span className="live-dot" />
          MAINNET
        </span>
      </div>
    </header>
  )
}

function Overview() {
  return (
    <>
      <section className="hero-panel">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            PROGRAMMABLE DIGITAL INFRASTRUCTURE
          </div>
          <h1>
            The foundation for a
            <span> programmable digital economy.</span>
          </h1>
          <p>
            VEXQAR ORGANIZATION develops open, modular infrastructure spanning digital assets,
            wallets, decentralized finance, applications, computing and intelligent systems.
          </p>
          <div className="hero-actions">
            <NavLink className="primary-button" to="/vxr">
              Explore VXR
              <ArrowUpRight size={16} />
            </NavLink>
            <NavLink className="secondary-button" to="/architecture">
              View architecture
            </NavLink>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core">
            <img src="/brand/vexqar-mark.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="metrics-grid">
        <article className="metric-card">
          <span>VXR TOTAL SUPPLY</span>
          <strong>121,000,000</strong>
          <small>Fixed monetary supply</small>
        </article>
        <article className="metric-card">
          <span>NETWORK</span>
          <strong>POLYGON</strong>
          <small>Current settlement environment</small>
        </article>
        <article className="metric-card">
          <span>CORE STATUS</span>
          <strong className="metric-live">LIVE</strong>
          <small>Verified on mainnet</small>
        </article>
        <article className="metric-card">
          <span>MONETARY MODEL</span>
          <strong>18 DECIMALS</strong>
          <small>No inflationary issuance</small>
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ECOSYSTEM</span>
            <h2>One platform. Multiple infrastructure layers.</h2>
          </div>
          <p>
            VEXQAR is designed as a modular system. Each layer can evolve independently while
            remaining connected to the same economic foundation.
          </p>
        </div>

        <div className="module-grid">
          {modules.map(({ name, description, status, icon: Icon, to }) => (
            <NavLink
              className="module-card"
              key={name}
              to={to}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="module-top">
                <div className="module-icon">
                  <Icon size={19} strokeWidth={1.7} />
                </div>
                <StatusBadge status={status} />
              </div>
              <h3>{name}</h3>
              <p>{description}</p>
              <span className="module-arrow">
                Explore layer <ChevronRight size={15} />
              </span>
            </NavLink>
          ))}
        </div>
      </section>

      <section className="protocol-strip">
        <div className="protocol-icon">
          <ShieldCheck size={22} />
        </div>
        <div>
          <span className="eyebrow">MONETARY CONSTITUTION</span>
          <h2>VXR's monetary core is intentionally simple and constrained.</h2>
          <p>
            Fixed supply. No post-genesis minting. No transfer tax. No discretionary monetary
            administrator. Core contracts are designed to remain immutable.
          </p>
        </div>
        <NavLink to="/security" className="text-link">
          Security model <ArrowUpRight size={15} />
        </NavLink>
      </section>
    </>
  )
}

function PlaceholderPage({ title, eyebrow, description, icon: Icon }) {
  return (
    <section className="placeholder-page">
      <div className="placeholder-icon">
        <Icon size={25} />
      </div>
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <StatusBadge status="BUILDING" />
    </section>
  )
}

function VxrPage() {
  const allocation = [
    ['Deployment / Liquidity', '20%', '24,200,000 VXR'],
    ['Treasury', '20%', '24,200,000 VXR'],
    ['Economic / Community', '30%', '36,300,000 VXR'],
    ['Founder', '15%', '18,150,000 VXR'],
    ['Strategic Fund', '10%', '12,100,000 VXR'],
    ['Contributors', '5%', '6,050,000 VXR'],
  ]

  const constitution = [
    '121,000,000 VXR maximum and total supply',
    '18 decimal places',
    'No post-genesis minting',
    'No inflationary issuance',
    'No burn mechanism',
    'No transfer tax or reflection',
    'No blacklist, freeze or seizure authority',
    'No upgradeability of the monetary core',
    'Allocation and vesting are external to the core token',
  ]

  return (
    <section className="vxr-page">
      <div className="vxr-hero">
        <div className="vxr-hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            VXR MONETARY LAYER
          </div>
          <h1>
            A constrained monetary
            <span> foundation for VEXQAR.</span>
          </h1>
          <p>
            VXR is the native economic asset of the VEXQAR ecosystem. Its monetary
            core is intentionally simple: a fixed supply, deployed on Polygon,
            with no discretionary monetary administrator.
          </p>
          <div className="vxr-actions">
            <a
              className="primary-button"
              href="https://polygonscan.com/address/0x9701053faF5E6fE5fC27662002Da4b0017026067"
              target="_blank"
              rel="noreferrer"
            >
              View verified contract
              <ArrowUpRight size={16} />
            </a>
            <span className="vxr-live-status">
              <span className="live-dot" />
              LIVE · VERIFIED
            </span>
          </div>
        </div>

        <div className="vxr-supply-card">
          <span>TOTAL SUPPLY</span>
          <strong>121,000,000</strong>
          <small>VXR · fixed at genesis</small>
          <div className="vxr-card-divider" />
          <div className="vxr-card-meta">
            <span>
              <b>NETWORK</b>
              Polygon Mainnet
            </span>
            <span>
              <b>DECIMALS</b>
              18
            </span>
          </div>
        </div>
      </div>

      <div className="vxr-contract">
        <div>
          <span className="eyebrow">VERIFIED DEPLOYMENT</span>
          <strong>VEXQAR · VXR</strong>
        </div>
        <code>0x9701053faF5E6fE5fC27662002Da4b0017026067</code>
        <a
          href="https://polygonscan.com/address/0x9701053faF5E6fE5fC27662002Da4b0017026067"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          PolygonScan
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="vxr-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MONETARY CONSTITUTION</span>
            <h2>Rules enforced by the core.</h2>
          </div>
          <p>
            The VXR monetary layer is deliberately narrow. Broader VEXQAR
            infrastructure can evolve without changing the monetary core.
          </p>
        </div>

        <div className="constitution-grid">
          {constitution.map((item) => (
            <div className="constitution-item" key={item}>
              <ShieldCheck size={17} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="vxr-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SUPPLY ALLOCATION</span>
            <h2>121 million VXR. Fully accounted for.</h2>
          </div>
          <p>
            Allocation pools are separated from the immutable monetary core.
            Vesting and release rules govern distribution outside the token contract.
          </p>
        </div>

        <div className="allocation-list">
          {allocation.map(([name, percentage, amount]) => (
            <div className="allocation-row" key={name}>
              <div className="allocation-name">
                <span>{name}</span>
                <small>{percentage}</small>
              </div>
              <div className="allocation-track">
                <span style={{ width: percentage }} />
              </div>
              <strong>{amount}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="vxr-bottom-grid">
        <article className="vxr-info-card">
          <span className="eyebrow">INITIAL CIRCULATION</span>
          <strong>11,000,000 VXR</strong>
          <p>
            Target initial circulation is 11 million VXR, representing 9.09%
            of the fixed supply. The remaining allocation is subject to its
            documented release, vesting or strategic distribution rules.
          </p>
        </article>

        <article className="vxr-info-card">
          <span className="eyebrow">NETWORK ROLE</span>
          <strong>VXR ≠ GAS</strong>
          <p>
            VXR is the VEXQAR economic asset. POL remains the Polygon network
            gas asset used for transaction execution on the current settlement layer.
          </p>
        </article>
      </div>
    </section>
  )
}

function ArchitecturePage() {
  const layers = [
    {
      index: '01',
      title: 'Economic Layer',
      status: 'LIVE',
      icon: CircleDollarSign,
      description:
        'VXR provides the fixed monetary foundation of the VEXQAR ecosystem. Its core supply and monetary rules are intentionally constrained.',
      facts: ['121M fixed supply', '18 decimals', 'Polygon Mainnet'],
      path: '/vxr',
    },
    {
      index: '02',
      title: 'Settlement Layer',
      status: 'LIVE',
      icon: Blocks,
      description:
        'Polygon provides the current settlement environment for VEXQAR contracts and on-chain asset movement. POL remains the network gas asset.',
      facts: ['Polygon chain 137', 'Verified contracts', 'On-chain settlement'],
      path: '/architecture',
    },
    {
      index: '03',
      title: 'Asset Infrastructure',
      status: 'BUILDING',
      icon: Wallet,
      description:
        'Wallet and asset infrastructure forms the controlled interface between users, digital assets and protocol services.',
      facts: ['Asset custody interfaces', 'Wallet infrastructure', 'Transaction boundaries'],
      path: '/wallet',
    },
    {
      index: '04',
      title: 'Protocol Services',
      status: 'BUILDING',
      icon: Network,
      description:
        'Service modules connect the economic layer to applications, DeFi primitives and future protocol capabilities without changing the monetary core.',
      facts: ['Modular services', 'Composable interfaces', 'Externalized allocation'],
      path: '/documentation',
    },
    {
      index: '05',
      title: 'Applications',
      status: 'PLANNED',
      icon: Globe2,
      description:
        'Application interfaces sit above the protocol layers, turning VEXQAR infrastructure into practical products and user-facing experiences.',
      facts: ['User applications', 'Financial interfaces', 'Ecosystem access'],
      path: '/applications',
    },
    {
      index: '06',
      title: 'Compute & Intelligence',
      status: 'RESEARCH',
      icon: Cpu,
      description:
        'Future compute and intelligence systems can operate above the protocol foundation, providing automation, analysis and higher-level coordination.',
      facts: ['Compute systems', 'Intelligence layer', 'Future automation'],
      path: '/roadmap',
    },
  ]

  return (
    <section className="architecture-page">
      <div className="architecture-hero">
        <div className="architecture-hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            SYSTEM ARCHITECTURE
          </div>
          <h1>
            One protocol foundation.
            <span> Multiple layers of execution.</span>
          </h1>
          <p>
            VEXQAR is designed as a modular technology stack. The monetary core
            remains deliberately constrained while higher layers can evolve,
            integrate and expand independently.
          </p>
        </div>

        <div className="architecture-hero-panel">
          <div className="architecture-node architecture-node-core">
            <span>VEXQAR</span>
            <small>PROTOCOL FOUNDATION</small>
          </div>
          <div className="architecture-orbit architecture-orbit-one" />
          <div className="architecture-orbit architecture-orbit-two" />
          <div className="architecture-orbit architecture-orbit-three" />
        </div>
      </div>

      <div className="architecture-principles">
        <article>
          <span className="eyebrow">01 · SEPARATION</span>
          <strong>Monetary core ≠ application layer</strong>
          <p>
            The VXR contract does not need to change when wallets, applications
            or future services evolve.
          </p>
        </article>

        <article>
          <span className="eyebrow">02 · COMPOSABILITY</span>
          <strong>Layers can build on the foundation</strong>
          <p>
            Protocol services and applications can interact with the economic
            and settlement layers through defined interfaces.
          </p>
        </article>

        <article>
          <span className="eyebrow">03 · CONSTRAINTS</span>
          <strong>Critical rules stay narrow</strong>
          <p>
            Supply, issuance and monetary authority are constrained at the
            core rather than delegated to a broad administrative system.
          </p>
        </article>
      </div>

      <div className="architecture-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">STACK OVERVIEW</span>
            <h2>VEXQAR as a layered system.</h2>
          </div>
          <p>
            Each layer has a different responsibility. Current status labels
            describe implementation maturity, not monetary authority.
          </p>
        </div>

        <div className="architecture-stack">
          {layers.map(({ index, title, status, icon: Icon, description, facts, path }) => (
            <NavLink
              className="architecture-layer"
              key={title}
              to={path}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="architecture-layer-index">{index}</div>

              <div className="architecture-layer-icon">
                <Icon size={20} strokeWidth={1.7} />
              </div>

              <div className="architecture-layer-main">
                <div className="architecture-layer-heading">
                  <div>
                    <span className="architecture-layer-kicker">{status}</span>
                    <h3>{title}</h3>
                  </div>
                  <span className={`architecture-status status-${status.toLowerCase()}`}>
                    {status}
                  </span>
                </div>

                <p>{description}</p>

                <div className="architecture-facts">
                  {facts.map((fact) => (
                    <span key={fact}>{fact}</span>
                  ))}
                </div>
              </div>

              <ChevronRight className="architecture-layer-arrow" size={18} />
            </NavLink>
          ))}
        </div>
      </div>

      <div className="architecture-boundary">
        <div>
          <span className="eyebrow">ARCHITECTURAL BOUNDARY</span>
          <h2>What can evolve without rewriting the monetary core?</h2>
        </div>

        <div className="boundary-grid">
          <div>
            <ShieldCheck size={18} />
            <strong>Core monetary rules</strong>
            <span>Constrained</span>
          </div>
          <div>
            <Network size={18} />
            <strong>Protocol services</strong>
            <span>Composable</span>
          </div>
          <div>
            <Code2 size={18} />
            <strong>Applications</strong>
            <span>Expandable</span>
          </div>
          <div>
            <Cpu size={18} />
            <strong>Future compute</strong>
            <span>Independent layer</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function SecurityPage() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: 'No discretionary monetary administrator',
      description:
        'The VXR monetary core does not expose an owner or administrator with discretionary control over supply or transfers.',
    },
    {
      icon: CircleDollarSign,
      title: 'Fixed monetary supply',
      description:
        'The deployed VEXQAR token establishes 121,000,000 VXR as the total and maximum supply at genesis.',
    },
    {
      icon: Blocks,
      title: 'No post-genesis minting',
      description:
        'The core token contains no mechanism for creating additional VXR after the initial genesis allocation.',
    },
    {
      icon: Network,
      title: 'No upgradeable monetary core',
      description:
        'The deployed token is not designed around an upgrade proxy or discretionary upgrade authority.',
    },
    {
      icon: Code2,
      title: 'No transfer tax or reflection',
      description:
        'Standard VXR transfers are not subject to protocol-level transfer taxation, reflection or redistribution logic.',
    },
    {
      icon: Wallet,
      title: 'Allocation separated from the token',
      description:
        'Treasury, founder, contributor and other distribution rules are implemented through external allocation and vesting infrastructure.',
    },
  ]

  const verification = [
    ['TOKEN', 'VEXQAR · VXR', 'VERIFIED'],
    ['NETWORK', 'Polygon Mainnet · Chain 137', 'LIVE'],
    ['SUPPLY', '121,000,000 VXR', 'RECONCILED'],
    ['DECIMALS', '18', 'FIXED'],
    ['MONETARY CORE', 'Non-upgradeable', 'CONSTRAINED'],
    ['CONTRACT', '0x9701053faF5E6fE5fC27662002Da4b0017026067', 'VERIFIED'],
  ]

  return (
    <section className="security-page">
      <div className="security-hero">
        <div className="security-hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            PROTOCOL SECURITY
          </div>
          <h1>
            Security through
            <span> constraints and verification.</span>
          </h1>
          <p>
            VEXQAR treats critical monetary rules as explicit boundaries.
            The goal is not to promise absolute security, but to make the
            important assumptions visible, narrow and independently verifiable.
          </p>
        </div>

        <div className="security-hero-card">
          <div className="security-shield">
            <ShieldCheck size={34} strokeWidth={1.4} />
          </div>
          <span>VXR MONETARY CORE</span>
          <strong>CONSTRAINED</strong>
          <small>Polygon Mainnet · Chain 137</small>
        </div>
      </div>

      <div className="security-warning">
        <ShieldCheck size={18} />
        <div>
          <strong>Security is a property to verify, not a marketing guarantee.</strong>
          <p>
            Users should independently verify contract addresses, transaction
            details, permissions and network state before interacting with
            digital assets.
          </p>
        </div>
      </div>

      <div className="security-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CORE GUARANTEES</span>
            <h2>What the monetary layer deliberately does not do.</h2>
          </div>
          <p>
            These constraints reduce the set of privileged behaviors available
            to the deployed VXR token.
          </p>
        </div>

        <div className="security-guarantees">
          {guarantees.map(({ icon: Icon, title, description }) => (
            <article className="security-guarantee" key={title}>
              <div className="security-guarantee-icon">
                <Icon size={19} strokeWidth={1.7} />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="security-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">VERIFICATION RECORD</span>
            <h2>Publicly inspectable protocol state.</h2>
          </div>
          <p>
            The following records describe the deployed VXR monetary layer and
            provide concrete anchors for independent verification.
          </p>
        </div>

        <div className="verification-table">
          {verification.map(([field, value, state]) => (
            <div className="verification-row" key={field}>
              <span>{field}</span>
              <code>{value}</code>
              <strong>{state}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="security-boundary">
        <div>
          <span className="eyebrow">SECURITY BOUNDARIES</span>
          <h2>Separate what must be immutable from what can evolve.</h2>
        </div>

        <div className="security-boundary-grid">
          <article>
            <span>IMMUTABLE CORE</span>
            <strong>VXR monetary rules</strong>
            <p>
              Supply, issuance model and core token behavior remain constrained
              at the deployed contract layer.
            </p>
          </article>

          <article>
            <span>EXTERNAL CONTROL PLANE</span>
            <strong>Allocation & vesting</strong>
            <p>
              Distribution schedules can be managed through separate contracts
              without introducing monetary controls into the token itself.
            </p>
          </article>

          <article>
            <span>SETTLEMENT</span>
            <strong>Polygon Mainnet</strong>
            <p>
              On-chain transactions are settled on Polygon, where users can
              inspect contract state and transaction history independently.
            </p>
          </article>
        </div>
      </div>

      <div className="security-contract">
        <div>
          <span className="eyebrow">VERIFIED CONTRACT</span>
          <strong>VEXQAR · VXR</strong>
        </div>

        <code>0x9701053faF5E6fE5fC27662002Da4b0017026067</code>

        <a
          href="https://polygonscan.com/address/0x9701053faF5E6fE5fC27662002Da4b0017026067"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Inspect on PolygonScan
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  )
}

function DocumentationPage() {
  const allocation = [
    ['Deployment / Liquidity', '20%', '24,200,000 VXR'],
    ['Treasury', '20%', '24,200,000 VXR'],
    ['Economic / Community', '30%', '36,300,000 VXR'],
    ['Founder', '15%', '18,150,000 VXR'],
    ['Strategic Fund', '10%', '12,100,000 VXR'],
    ['Contributors', '5%', '6,050,000 VXR'],
  ]

  const fundamentals = [
    ['Asset', 'VEXQAR · VXR'],
    ['Maximum supply', '121,000,000 VXR'],
    ['Decimals', '18'],
    ['Network', 'Polygon Mainnet · Chain 137'],
    ['Gas asset', 'POL'],
    ['Token standard', 'ERC-20'],
    ['Monetary core', 'Non-upgradeable'],
    ['Post-genesis minting', 'None'],
  ]

  const constraints = [
    'No post-genesis minting',
    'No inflationary issuance',
    'No burn mechanism',
    'No transfer tax or reflection',
    'No blacklist, freeze or seizure authority',
    'No discretionary monetary administrator',
    'No upgradeability of the monetary core',
    'Allocation and vesting remain external to the core token',
  ]

  return (
    <section className="documentation-page">
      <div className="documentation-hero">
        <div className="documentation-hero-copy">
          <span className="eyebrow">PROTOCOL DOCUMENTATION</span>
          <h1>Understand the system before you use it.</h1>
          <p>
            The VEXQAR documentation is the public reference for the protocol,
            VXR monetary design, allocation framework, architecture, security
            boundaries and verified on-chain contracts.
          </p>

          <div className="documentation-hero-actions">
            <a className="primary-action" href="#protocol">
              Read the protocol
              <ChevronRight size={16} />
            </a>
            <a className="secondary-action" href="#contracts">
              Contract references
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="documentation-hero-card">
          <div className="documentation-orbit">
            <FileText size={27} strokeWidth={1.5} />
          </div>
          <span>PUBLIC REFERENCE</span>
          <strong>VEXQAR / VXR</strong>
          <small>Protocol knowledge layer</small>
        </div>
      </div>

      <div className="documentation-index">
        <a href="#protocol"><span>01</span> Protocol</a>
        <a href="#vxr"><span>02</span> VXR</a>
        <a href="#economics"><span>03</span> Economics</a>
        <a href="#security-model"><span>04</span> Constraints</a>
        <a href="#contracts"><span>05</span> Contracts</a>
      </div>

      <div id="protocol" className="documentation-section">
        <div className="documentation-section-heading">
          <span className="eyebrow">01 · PROTOCOL</span>
          <h2>What is VEXQAR?</h2>
          <p>
            VEXQAR is a modular protocol and technology ecosystem designed
            around a constrained economic core, Polygon settlement and
            extensible infrastructure. The architecture separates monetary
            rules from allocation, vesting, applications and future services.
          </p>
        </div>

        <div className="documentation-fundamentals">
          {fundamentals.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </div>

      <div id="vxr" className="documentation-section documentation-vxr">
        <div className="documentation-section-heading">
          <span className="eyebrow">02 · VXR</span>
          <h2>A fixed monetary foundation.</h2>
          <p>
            VXR is the native economic asset of the VEXQAR ecosystem. Its
            monetary core is intentionally narrow: the genesis supply is fixed
            at 121 million VXR and the core contract contains no mechanism for
            discretionary monetary expansion.
          </p>
        </div>

        <div className="documentation-vxr-grid">
          <article className="documentation-feature">
            <CircleDollarSign size={19} />
            <span>FIXED SUPPLY</span>
            <strong>121,000,000 VXR</strong>
            <p>
              The entire supply is created at genesis. There is no subsequent
              minting or inflationary issuance mechanism.
            </p>
          </article>

          <article className="documentation-feature">
            <ShieldCheck size={19} />
            <span>MONETARY CONTROL</span>
            <strong>Constrained</strong>
            <p>
              The core token has no discretionary monetary administrator,
              blacklist, freeze, seizure or upgrade authority.
            </p>
          </article>

          <article className="documentation-feature">
            <Network size={19} />
            <span>SETTLEMENT</span>
            <strong>Polygon Mainnet</strong>
            <p>
              VEXQAR uses Polygon for on-chain settlement. POL, not VXR, is
              the Polygon gas asset.
            </p>
          </article>
        </div>
      </div>

      <div id="economics" className="documentation-section">
        <div className="documentation-section-heading">
          <span className="eyebrow">03 · ECONOMICS</span>
          <h2>Supply allocation.</h2>
          <p>
            The 121 million VXR supply is divided across six documented pools.
            Allocation and vesting are handled outside the immutable monetary
            core so that distribution policy remains separate from the token's
            fundamental monetary rules.
          </p>
        </div>

        <div className="documentation-allocation">
          {allocation.map(([pool, percentage, amount], index) => (
            <article key={pool}>
              <div className="documentation-allocation-number">
                0{index + 1}
              </div>
              <div className="documentation-allocation-main">
                <strong>{pool}</strong>
                <span>{amount}</span>
              </div>
              <b>{percentage}</b>
            </article>
          ))}
        </div>

        <div className="documentation-circulation">
          <div>
            <span>INITIAL TARGET CIRCULATION</span>
            <strong>11,000,000 VXR</strong>
          </div>
          <div>
            <span>SHARE OF TOTAL SUPPLY</span>
            <strong>9.09%</strong>
          </div>
          <p>
            The target initial circulation consists of 9.185 million VXR from
            Deployment / Liquidity and 1.815 million VXR from the Economic /
            Community pool. Other pools target zero circulation at TGE.
          </p>
        </div>
      </div>

      <div className="documentation-section">
        <div className="documentation-section-heading">
          <span className="eyebrow">VESTING & RELEASE</span>
          <h2>Locked supply is not automatically circulating.</h2>
          <p>
            VEXQAR separates ownership allocation from release mechanics.
            Where vesting applies, tokens unlock according to the documented
            schedule and require the relevant release mechanism to be called.
          </p>
        </div>

        <div className="documentation-release-grid">
          <article>
            <span>TREASURY</span>
            <strong>12-month cliff</strong>
            <p>36-month linear vesting after the cliff; fully vested at month 48.</p>
          </article>
          <article>
            <span>FOUNDER</span>
            <strong>12-month cliff</strong>
            <p>36-month linear vesting from month 13 through month 48.</p>
          </article>
          <article>
            <span>CONTRIBUTORS</span>
            <strong>12-month cliff</strong>
            <p>36-month linear vesting from month 13 through month 48.</p>
          </article>
          <article>
            <span>STRATEGIC FUND</span>
            <strong>Controlled releases</strong>
            <p>No automatic vesting schedule; strategic releases are separately documented.</p>
          </article>
        </div>
      </div>

      <div id="security-model" className="documentation-section">
        <div className="documentation-section-heading">
          <span className="eyebrow">04 · SECURITY MODEL</span>
          <h2>Security through constraints.</h2>
          <p>
            VEXQAR treats security as something that can be inspected and
            verified. The strongest monetary guarantees come from what the
            core contract cannot do.
          </p>
        </div>

        <div className="documentation-constraints">
          {constraints.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
              <ShieldCheck size={16} />
            </div>
          ))}
        </div>
      </div>

      <div id="contracts" className="documentation-section">
        <div className="documentation-section-heading">
          <span className="eyebrow">05 · CONTRACTS</span>
          <h2>Verified on-chain references.</h2>
          <p>
            The following addresses are public protocol references on Polygon
            Mainnet. Independent users can inspect contract state and
            transaction history directly on PolygonScan.
          </p>
        </div>

        <div className="documentation-contracts">
          <article className="documentation-contract-primary">
            <div>
              <span className="eyebrow">VEXQAR · VXR</span>
              <strong>Core Token</strong>
            </div>
            <code>0x9701053faF5E6fE5fC27662002Da4b0017026067</code>
            <a
              href="https://polygonscan.com/address/0x9701053faF5E6fE5fC27662002Da4b0017026067"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Inspect verified contract
              <ArrowUpRight size={15} />
            </a>
          </article>

          <div className="documentation-contract-list">
            <article>
              <span>ALLOCATION</span>
              <code>0x0e7EfC9d4397dcBE351bEFB573dCB51980C38BE4</code>
            </article>
            <article>
              <span>ECONOMIC RELEASE</span>
              <code>0xB00cd96ca5988f25b4fF8baBc84bc5B0eE4c5869</code>
            </article>
            <article>
              <span>TREASURY VESTING</span>
              <code>0x61caAF012230B6457855fE10181e5BC641b65736</code>
            </article>
            <article>
              <span>FOUNDER VESTING</span>
              <code>0x1859fb4582cBB7f1F108AAE90b6c70E71d318f62</code>
            </article>
            <article>
              <span>CONTRIBUTORS VESTING</span>
              <code>0x9110de82FAcE4F5b6248feCEEb11705e5736B05A</code>
            </article>
          </div>
        </div>
      </div>

      <div className="documentation-disclaimer">
        <BookOpen size={18} />
        <div>
          <strong>How to read this documentation</strong>
          <p>
            VEXQAR documentation describes protocol design and publicly
            verifiable contract behavior. It is not a promise of price,
            investment return or future value. Always verify current on-chain
            state before relying on any operational detail.
          </p>
        </div>
      </div>
    </section>
  )
}

function RoadmapPage() {
  const phases = [
    {
      number: '01',
      status: 'LIVE',
      title: 'Monetary Foundation',
      description:
        'Establish the VXR economic core, public allocation framework and Polygon settlement foundation.',
      items: [
        '121,000,000 VXR fixed supply',
        'Verified Polygon Mainnet contracts',
        'Allocation and vesting framework',
        'Public protocol documentation',
      ],
    },
    {
      number: '02',
      status: 'BUILDING',
      title: 'Asset Infrastructure',
      description:
        'Build the infrastructure required for secure asset management, transaction boundaries and protocol services.',
      items: [
        'Platform-native wallet infrastructure',
        'Custody and authorization boundaries',
        'Transaction lifecycle controls',
        'Protocol service layer',
      ],
    },
    {
      number: '03',
      status: 'PLANNED',
      title: 'Applications & DeFi',
      description:
        'Expand the protocol into user-facing applications and programmable financial experiences as the underlying infrastructure matures.',
      items: [
        'Decentralized applications',
        'Liquidity and swap infrastructure',
        'Composable financial primitives',
        'Application-level protocol integrations',
      ],
    },
    {
      number: '04',
      status: 'RESEARCH',
      title: 'Compute & Intelligence',
      description:
        'Explore higher-level compute, intelligence and autonomous coordination capabilities that can operate above the protocol foundation.',
      items: [
        'Distributed compute concepts',
        'Intelligence infrastructure',
        'Protocol-aware automation',
        'Human-authorized execution boundaries',
      ],
    },
    {
      number: '05',
      status: 'RESEARCH',
      title: 'Network Expansion',
      description:
        'Research broader network interfaces and future-chain abstractions while preserving the constraints of the VEXQAR monetary core.',
      items: [
        'Future-chain abstraction',
        'Cross-network infrastructure',
        'Interoperability research',
        'Expanded protocol connectivity',
      ],
    },
  ]

  return (
    <section className="roadmap-page">
      <div className="roadmap-hero">
        <div className="roadmap-hero-copy">
          <span className="eyebrow">PROTOCOL EVOLUTION</span>
          <h1>Build the foundation. Then expand the system.</h1>
          <p>
            VEXQAR is being developed in layers. The roadmap follows the
            architecture of the protocol itself: establish verifiable
            foundations first, build infrastructure second, then expand into
            applications and research.
          </p>
        </div>

        <div className="roadmap-hero-card">
          <div className="roadmap-signal">
            <span className="roadmap-signal-dot" />
            <span>DEVELOPMENT MODEL</span>
          </div>
          <strong>Foundation → Infrastructure → Applications → Research</strong>
          <p>
            Progress is capability-driven rather than promise-driven.
          </p>
        </div>
      </div>

      <div className="roadmap-principles">
        <article>
          <span>01</span>
          <strong>Foundation first</strong>
          <p>
            Core monetary and settlement rules are established before higher
            layers depend on them.
          </p>
        </article>
        <article>
          <span>02</span>
          <strong>Build before exposure</strong>
          <p>
            Wallet and DeFi capabilities move forward as the underlying
            systems become production-ready.
          </p>
        </article>
        <article>
          <span>03</span>
          <strong>Research stays honest</strong>
          <p>
            Long-horizon capabilities remain explicitly marked as research
            until they become real systems.
          </p>
        </article>
      </div>

      <div className="roadmap-timeline">
        {phases.map((phase, index) => (
          <article
            className={`roadmap-phase roadmap-phase-${phase.status.toLowerCase()}`}
            key={phase.number}
          >
            <div className="roadmap-phase-rail">
              <span>{phase.number}</span>
              {index < phases.length - 1 && <i />}
            </div>

            <div className="roadmap-phase-body">
              <div className="roadmap-phase-heading">
                <div>
                  <span className="eyebrow">{phase.status}</span>
                  <h2>{phase.title}</h2>
                </div>
                <StatusBadge status={phase.status} />
              </div>

              <p className="roadmap-phase-description">
                {phase.description}
              </p>

              <div className="roadmap-phase-items">
                {phase.items.map((item) => (
                  <div key={item}>
                    <span />
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="roadmap-boundary">
        <div className="roadmap-boundary-icon">
          <ShieldCheck size={19} />
        </div>
        <div>
          <span className="eyebrow">A GOVERNANCE PRINCIPLE</span>
          <strong>Expansion does not require weakening the monetary core.</strong>
          <p>
            Future applications, infrastructure and research can evolve
            around VXR without introducing discretionary monetary control into
            the core token contract.
          </p>
        </div>
      </div>
    </section>
  )
}


function ApplicationsPage() {
  const applicationLayers = [
    {
      index: '01',
      title: 'Protocol Interfaces',
      status: 'PLANNED',
      icon: Network,
      description:
        'Interfaces that expose VEXQAR protocol capabilities without changing the rules of the underlying monetary core.',
      items: [
        'Protocol-aware user interfaces',
        'Verified contract interactions',
        'Transparent transaction states',
      ],
    },
    {
      index: '02',
      title: 'Asset Experiences',
      status: 'PLANNED',
      icon: Wallet,
      description:
        'Application experiences for interacting with digital assets as the wallet and asset infrastructure matures.',
      items: [
        'Asset discovery and visibility',
        'User-authorized actions',
        'Clear execution boundaries',
      ],
    },
    {
      index: '03',
      title: 'Financial Applications',
      status: 'PLANNED',
      icon: Activity,
      description:
        'Future financial applications built above the protocol infrastructure, including programmable and composable financial experiences.',
      items: [
        'Liquidity experiences',
        'Swap interfaces',
        'Composable financial primitives',
      ],
    },
    {
      index: '04',
      title: 'Ecosystem Applications',
      status: 'PLANNED',
      icon: Globe2,
      description:
        'A broader application surface for VEXQAR-native and third-party builders as the surrounding infrastructure becomes available.',
      items: [
        'VEXQAR-native applications',
        'Third-party integrations',
        'Open ecosystem access',
      ],
    },
  ]

  return (
    <section className="applications-page">
      <div className="applications-hero">
        <div className="applications-hero-copy">
          <span className="eyebrow">APPLICATION LAYER</span>
          <h1>
            Turn infrastructure into
            <span> useful experiences.</span>
          </h1>
          <p>
            Applications sit above the VEXQAR protocol layers. They are where
            users and builders interact with the system without changing the
            constraints that govern its monetary foundation.
          </p>

          <div className="applications-hero-meta">
            <div>
              <span>POSITION</span>
              <strong>PLANNED</strong>
            </div>
            <div>
              <span>MODEL</span>
              <strong>PROTOCOL → APPLICATIONS</strong>
            </div>
            <div>
              <span>BOUNDARY</span>
              <strong>USER AUTHORIZATION</strong>
            </div>
          </div>
        </div>

        <div className="applications-hero-panel">
          <div className="applications-panel-grid" />
          <div className="applications-orbit applications-orbit-one" />
          <div className="applications-orbit applications-orbit-two" />
          <div className="applications-hero-core">
            <Blocks size={30} />
            <strong>VEXQAR</strong>
            <span>APPLICATION SURFACE</span>
          </div>
        </div>
      </div>

      <div className="applications-principles">
        <div>
          <span className="eyebrow">DESIGN PRINCIPLE</span>
          <h2>Build above the core.</h2>
        </div>
        <p>
          The application layer should expand what users can do without
          expanding discretionary control over VXR itself. Applications,
          services and interfaces remain separate from the immutable monetary
          foundation.
        </p>
      </div>

      <div className="applications-grid">
        {applicationLayers.map((layer) => {
          const Icon = layer.icon

          return (
            <article className="applications-card" key={layer.index}>
              <div className="applications-card-top">
                <span className="applications-card-index">{layer.index}</span>
                <StatusBadge status={layer.status} />
              </div>

              <div className="applications-card-icon">
                <Icon size={20} />
              </div>

              <h2>{layer.title}</h2>
              <p>{layer.description}</p>

              <div className="applications-card-items">
                {layer.items.map((item) => (
                  <div key={item}>
                    <span />
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </article>
          )
        })}
      </div>

      <div className="applications-flow">
        <div className="applications-flow-heading">
          <span className="eyebrow">APPLICATION MODEL</span>
          <h2>Infrastructure first. Experience second.</h2>
          <p>
            Applications should consume verified infrastructure rather than
            becoming a substitute for it.
          </p>
        </div>

        <div className="applications-flow-track">
          <div>
            <span>01</span>
            <strong>Protocol</strong>
            <small>Rules & contracts</small>
          </div>
          <ChevronRight size={18} />
          <div>
            <span>02</span>
            <strong>Infrastructure</strong>
            <small>Services & boundaries</small>
          </div>
          <ChevronRight size={18} />
          <div>
            <span>03</span>
            <strong>Applications</strong>
            <small>User experiences</small>
          </div>
          <ChevronRight size={18} />
          <div>
            <span>04</span>
            <strong>Ecosystem</strong>
            <small>Builders & integrations</small>
          </div>
        </div>
      </div>

      <div className="applications-boundary">
        <div className="applications-boundary-icon">
          <ShieldCheck size={19} />
        </div>
        <div>
          <span className="eyebrow">APPLICATION BOUNDARY</span>
          <strong>Applications do not control the monetary constitution.</strong>
          <p>
            User-facing products may evolve independently, but the VXR core
            remains governed by its fixed-supply and constrained monetary
            design.
          </p>
        </div>
      </div>
    </section>
  )
}


function AboutPage() {
  const developmentLinks = [
    {
      label: 'GitHub',
      description: 'VEXQAR Organization website source and public development history.',
      href: 'https://github.com/billionaireman35-cyber/vexqar-organization',
    },
    {
      label: 'GitHub Contracts',
      description: 'Public source for the VEXQAR protocol contracts and deployment infrastructure.',
      href: 'https://github.com/billionaireman35-cyber/vexqar-contracts',
    },
    {
      label: 'GitHub Issues',
      description: 'Public technical issues, improvements and development discussions.',
      href: 'https://github.com/billionaireman35-cyber/vexqar-organization/issues',
    },
    {
      label: 'GitHub Discussions',
      description: 'Open community and ecosystem conversations around VEXQAR.',
      href: 'https://github.com/billionaireman35-cyber/vexqar-organization/discussions',
    },
    {
      label: 'PolygonScan',
      description: 'Verified VXR contract and public on-chain transaction history.',
      href: 'https://polygonscan.com/address/0x9701053faF5E6fE5fC27662002Da4b0017026067',
    },
  ]

  const protocolFacts = [
    ['Asset', 'VEXQAR (VXR)'],
    ['Total supply', '121,000,000 VXR'],
    ['Decimals', '18'],
    ['Network', 'Polygon Mainnet'],
    ['Chain ID', '137'],
    ['Contract', '0x9701053f...17026067'],
  ]

  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">ABOUT VEXQAR</span>
          <h1>
            An open organization building
            <span> protocol infrastructure.</span>
          </h1>
          <p>
            VEXQAR Organization develops the economic, settlement, asset and
            application infrastructure surrounding VEXQAR (VXR), with an
            emphasis on transparent development and explicit protocol rules.
          </p>
        </div>

        <div className="about-hero-mark">
          <img src="/brand/vexqar-mark.svg" alt="VEXQAR" />
          <span>VEXQAR ORGANIZATION</span>
        </div>
      </div>

      <div className="about-grid">
        <article className="about-panel about-organization">
          <span className="eyebrow">ORGANIZATION</span>
          <h2>VEXQAR Organization</h2>
          <p>
            VEXQAR Organization is the public-facing organization around the
            VEXQAR ecosystem. It coordinates protocol development, public
            interfaces, infrastructure and ecosystem expansion.
          </p>

          <div className="about-principles">
            <div>
              <strong>GOLDX TECHNOLOGIES LTD</strong>
              <span>Parent and authorizing organization</span>
            </div>
            <div>
              <strong>TEAM</strong>
              <span>Builders responsible for protocol, infrastructure and ecosystem development</span>
            </div>
            <div>
              <strong>CONTRIBUTORS</strong>
              <span>Developers, researchers, designers and other participants who contribute to the ecosystem</span>
            </div>
          </div>
        </article>

        <article className="about-panel about-community">
          <span className="eyebrow">COMMUNITY</span>
          <h2>Built beyond a single interface.</h2>
          <p>
            VEXQAR is intended to support users, builders, contributors and
            ecosystem participants. Community participation can extend through
            public repositories, technical discussions, applications and
            future ecosystem infrastructure.
          </p>

          <div className="about-community-points">
            <div>
              <strong>USERS</strong>
              <span>People interacting with VEXQAR assets and applications.</span>
            </div>
            <div>
              <strong>BUILDERS</strong>
              <span>Developers creating tools and applications around the protocol.</span>
            </div>
            <div>
              <strong>CONTRIBUTORS</strong>
              <span>Participants improving the technical and public ecosystem.</span>
            </div>
          </div>
        </article>
      </div>

      <section className="about-section">
        <div className="about-section-heading">
          <div>
            <span className="eyebrow">VXR PROTOCOL</span>
            <h2>The monetary core.</h2>
          </div>
          <p>
            VXR is the native economic asset of VEXQAR. Its core monetary
            rules are explicit and designed to remain independently inspectable.
          </p>
        </div>

        <div className="about-facts">
          {protocolFacts.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        <div className="about-note">
          <strong>Core properties</strong>
          <p>
            Fixed 121,000,000 VXR supply, no post-genesis minting, no burn
            mechanism, no transfer tax or reflection, no blacklist or seizure
            mechanism, no discretionary monetary owner control and no
            upgradeability of the core token.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-heading">
          <div>
            <span className="eyebrow">OPEN DEVELOPMENT</span>
            <h2>Inspect the work.</h2>
          </div>
          <p>
            VEXQAR uses public repositories and verified on-chain contracts so
            the technology can be inspected directly.
          </p>
        </div>

        <div className="about-links">
          {developmentLinks.map((link) => (
            <a
              key={link.href}
              className="about-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <strong>{link.label}</strong>
                <span>{link.description}</span>
              </div>
              <ArrowUpRight size={17} />
            </a>
          ))}
        </div>
      </section>

      <section className="about-section about-contact">
        <div className="about-section-heading">
          <div>
            <span className="eyebrow">CONTACT</span>
            <h2>Official channels.</h2>
          </div>
          <p>
            Organization, protocol and ecosystem enquiries can be directed
            through the official channels below.
          </p>
        </div>

        <div className="about-contact-grid">
          <a
            href="mailto:vexqar-organization@protonmail.com"
            className="about-contact-card"
          >
            <span>VEXQAR ORGANIZATION</span>
            <strong>vexqar-organization@protonmail.com</strong>
          </a>

          <a
            href="mailto:Goldxtechnologies@gmail.com"
            className="about-contact-card"
          >
            <span>GOLDX TECHNOLOGIES LTD</span>
            <strong>Goldxtechnologies@gmail.com</strong>
          </a>
        </div>
      </section>

      <div className="about-principle">
        <span className="eyebrow">AN OPEN DEVELOPMENT PRINCIPLE</span>
        <strong>Expand the ecosystem without weakening the monetary core.</strong>
        <p>
          VEXQAR can evolve through infrastructure, applications, contributors
          and community participation while keeping the core economic rules
          explicit and inspectable.
        </p>
      </div>
    </section>
  )
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {sidebarOpen && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={1} />
        </button>
      )}

      <main className="main-content">
        <Topbar onMenu={() => setSidebarOpen(true)} />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route
              path="/vxr"
              element={<VxrPage />}
            />
            <Route
              path="/wallet"
              element={
                <PlaceholderPage
                  title="VEXQAR Wallet"
                  eyebrow="ASSET INFRASTRUCTURE"
                  description="A platform-native environment for managing digital assets and interacting with the VEXQAR ecosystem."
                  icon={Wallet}
                />
              }
            />
            <Route
              path="/defi"
              element={
                <PlaceholderPage
                  title="Decentralized Finance"
                  eyebrow="DEFI LAYER"
                  description="Liquidity, swaps and future programmable financial protocols built around the VEXQAR ecosystem."
                  icon={Activity}
                />
              }
            />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
