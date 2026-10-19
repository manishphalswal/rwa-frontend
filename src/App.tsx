import { FormEvent, useMemo, useState } from "react";

type Section = "home" | "polls" | "events" | "broadcasts" | "processes" | "directory";
type IconName =
  | "home"
  | "poll"
  | "calendar"
  | "megaphone"
  | "document"
  | "people"
  | "search"
  | "bell"
  | "menu"
  | "arrow"
  | "clock"
  | "location"
  | "check"
  | "download"
  | "phone"
  | "close"
  | "shield"
  | "water"
  | "leaf"
  | "alert"
  | "chevron";

const navigation: { id: Section; label: string; icon: IconName }[] = [
  { id: "home", label: "Overview", icon: "home" },
  { id: "polls", label: "Community polls", icon: "poll" },
  { id: "events", label: "Upcoming events", icon: "calendar" },
  { id: "broadcasts", label: "Broadcasts", icon: "megaphone" },
  { id: "processes", label: "Government processes", icon: "document" },
  { id: "directory", label: "Departments & POCs", icon: "people" },
];

const Icon = ({ name, size = 20 }: { name: IconName; size?: number }) => {
  const paths: Record<IconName, React.ReactNode> = {
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    poll: <><path d="M5 20V10M12 20V4M19 20v-7" /><path d="M2 20h20" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    megaphone: <><path d="m3 11 15-6v14L3 13Z" /><path d="M7 14v5a2 2 0 0 0 2 2h2l-1-6" /></>,
    document: <><path d="M6 2h9l4 4v16H6Z" /><path d="M14 2v5h5M9 12h6M9 16h6" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6M17 13a5 5 0 0 1 4 5v2" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    download: <><path d="M12 3v12M7 10l5 5 5-5M4 21h16" /></>,
    phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-1-2 2c-4-1.5-7.5-5-9-9l2-2Z" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-5" /></>,
    water: <path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z" />,
    leaf: <><path d="M20 4C12 4 5 8 5 15c0 3 2 5 5 5 7 0 10-8 10-16Z" /><path d="M4 21c3-6 7-9 12-12" /></>,
    alert: <><path d="M12 3 2.5 20h19Z" /><path d="M12 9v5M12 17h.01" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

function Login({ onLogin }: { onLogin: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <main className="login-page">
      <section className="login-story">
        <div className="brand brand-light"><span className="brand-mark">S</span><span><b>Sukoon</b><small>RESIDENT PORTAL</small></span></div>
        <div className="story-content">
          <span className="eyebrow">A better-connected community</span>
          <h1>Everything your neighbourhood needs, in one place.</h1>
          <p>Stay informed, have your say, and connect with the right people — whenever you need.</p>
          <div className="trust-row">
            <span><Icon name="shield" size={18} /> Secure resident access</span>
            <span><Icon name="people" size={18} /> 1,240+ residents</span>
          </div>
        </div>
        <p className="story-note">Serving Greenfield Residency since 2014</p>
      </section>
      <section className="login-panel">
        <form className="login-card" onSubmit={submit}>
          <div className="mobile-brand brand"><span className="brand-mark">S</span><span><b>Sukoon</b><small>RESIDENT PORTAL</small></span></div>
          <span className="eyebrow accent">Welcome back</span>
          <h2>Sign in to your community</h2>
          <p className="muted">Use your registered email or flat number.</p>
          <label>Email or flat number<input required defaultValue="A-1204" placeholder="e.g. A-1204" /></label>
          <label>Password
            <span className="password-field"><input required defaultValue="resident123" type={showPassword ? "text" : "password"} /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button></span>
          </label>
          <div className="form-row"><label className="remember"><input type="checkbox" defaultChecked /> Remember me</label><button className="text-button" type="button">Forgot password?</button></div>
          <button className="primary-button full" type="submit">Sign in <Icon name="arrow" size={18} /></button>
          <p className="help-copy">Need access? <button className="text-button" type="button">Contact the RWA office</button></p>
        </form>
      </section>
    </main>
  );
}

function Header({ onMenu }: { onMenu: () => void }) {
  const [search, setSearch] = useState("");
  return (
    <header className="topbar">
      <button className="icon-button menu-button" onClick={onMenu} aria-label="Open navigation"><Icon name="menu" /></button>
      <div className="search"><Icon name="search" size={18} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search notices, processes or people..." /></div>
      <div className="top-actions">
        <button className="icon-button notification-button" aria-label="Notifications"><Icon name="bell" /><i /></button>
        <span className="divider" />
        <button className="profile-button"><span className="avatar">AS</span><span><b>Aditi Sharma</b><small>Tower A · 1204</small></span><Icon name="chevron" size={15} /></button>
      </div>
    </header>
  );
}

function Sidebar({ current, setCurrent, open, close, onLogout }: { current: Section; setCurrent: (s: Section) => void; open: boolean; close: () => void; onLogout: () => void }) {
  return (
    <>
      {open && <button className="sidebar-scrim" onClick={close} aria-label="Close navigation" />}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-head">
          <div className="brand"><span className="brand-mark">S</span><span><b>Sukoon</b><small>RESIDENT PORTAL</small></span></div>
          <button className="icon-button sidebar-close" onClick={close} aria-label="Close navigation"><Icon name="close" /></button>
        </div>
        <nav>
          <span className="nav-label">COMMUNITY</span>
          {navigation.map((item) => (
            <button key={item.id} className={current === item.id ? "active" : ""} onClick={() => { setCurrent(item.id); close(); }}>
              <Icon name={item.icon} /><span>{item.label}</span>
              {item.id === "broadcasts" && <i className="nav-badge">3</i>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><span className="help-icon"><Icon name="phone" /></span><div><b>Need urgent help?</b><p>Security desk · 24×7</p><a href="tel:+911140245555">011 4024 5555</a></div></div>
          <button className="logout-button" onClick={onLogout}>Sign out</button>
          <small>Greenfield Residency RWA<br />Reg. No. 1782/2014</small>
        </div>
      </aside>
    </>
  );
}

const MetricCard = ({ icon, value, label, note, tone }: { icon: IconName; value: string; label: string; note: string; tone: string }) => (
  <article className="metric-card">
    <span className={`metric-icon ${tone}`}><Icon name={icon} /></span>
    <div><strong>{value}</strong><b>{label}</b><small>{note}</small></div>
  </article>
);

function PollCard({ expanded = false }: { expanded?: boolean }) {
  const [choice, setChoice] = useState("");
  const [voted, setVoted] = useState(false);
  const options = ["Install solar panels on clubhouse", "Upgrade children’s play area", "Add EV charging stations"];
  return (
    <article className={`panel poll-card ${expanded ? "expanded" : ""}`}>
      <div className="panel-heading"><div><span className="eyebrow accent">COMMUNITY POLL</span><h3>Vote on our next green initiative</h3></div><span className="status live">● LIVE</span></div>
      <p className="muted">Help decide where this quarter’s sustainability fund should go.</p>
      <div className="poll-options">
        {options.map((option, index) => (
          <label key={option} className={choice === option ? "selected" : ""}>
            <input type="radio" name="poll" checked={choice === option} onChange={() => setChoice(option)} />
            <span>{option}</span>
            {voted && <b>{[48, 31, 21][index]}%</b>}
          </label>
        ))}
      </div>
      <div className="poll-footer"><span><Icon name="clock" size={16} /> Ends in 2 days · 386 votes</span><button className="primary-button compact" disabled={!choice || voted} onClick={() => setVoted(true)}>{voted ? "Vote submitted" : "Cast your vote"}</button></div>
    </article>
  );
}

function EventsCard({ expanded = false }: { expanded?: boolean }) {
  const events = [
    { day: "18", month: "MAY", title: "Sunday Farmers’ Market", meta: "8:00 AM – 12:00 PM", place: "Central Lawn", color: "green" },
    { day: "22", month: "MAY", title: "RWA General Body Meeting", meta: "6:30 PM – 8:00 PM", place: "Clubhouse Hall", color: "blue" },
    { day: "25", month: "MAY", title: "Kids’ Summer Art Workshop", meta: "10:00 AM – 1:00 PM", place: "Activity Room", color: "orange" },
  ];
  return (
    <article className={`panel events-card ${expanded ? "expanded" : ""}`}>
      <div className="panel-heading"><h3>Upcoming events</h3><button className="text-button">View calendar <Icon name="arrow" size={15} /></button></div>
      <div className="event-list">{events.map((event) => <div className="event-item" key={event.title}><div className={`date-tile ${event.color}`}><strong>{event.day}</strong><span>{event.month}</span></div><div className="event-copy"><b>{event.title}</b><span><Icon name="clock" size={14} />{event.meta}</span><span><Icon name="location" size={14} />{event.place}</span></div><button className="icon-button"><Icon name="chevron" size={18} /></button></div>)}</div>
    </article>
  );
}

function Overview({ navigate }: { navigate: (section: Section) => void }) {
  return (
    <>
      <section className="welcome">
        <div><span className="eyebrow accent">MONDAY, 12 MAY</span><h1>Good morning, Aditi.</h1><p>Here’s what’s happening in your community today.</p></div>
        <button className="primary-button" onClick={() => navigate("broadcasts")}><Icon name="megaphone" size={18} /> View latest updates</button>
      </section>
      <section className="metrics">
        <MetricCard icon="megaphone" value="03" label="New broadcasts" note="2 require attention" tone="coral" />
        <MetricCard icon="calendar" value="05" label="Upcoming events" note="Next on Sunday" tone="blue" />
        <MetricCard icon="poll" value="02" label="Active polls" note="Vote by Wednesday" tone="green" />
        <MetricCard icon="document" value="12" label="Resident resources" note="Processes & forms" tone="gold" />
      </section>
      <section className="dashboard-grid"><PollCard /><EventsCard /></section>
      <section className="bottom-grid">
        <article className="panel broadcast-card">
          <div className="panel-heading"><h3>Latest broadcasts</h3><button className="text-button" onClick={() => navigate("broadcasts")}>View all <Icon name="arrow" size={15} /></button></div>
          <div className="broadcast-list">
            <div><span className="notice-icon warning"><Icon name="water" /></span><p><b>Water supply maintenance</b><small>Supply paused in Towers A & B, 11 AM–2 PM tomorrow.</small><time>25 min ago</time></p></div>
            <div><span className="notice-icon info"><Icon name="shield" /></span><p><b>Visitor entry protocol updated</b><small>Please review the new digital entry guidelines.</small><time>Yesterday</time></p></div>
          </div>
        </article>
        <article className="panel quick-card">
          <div className="panel-heading"><h3>Resident quick links</h3></div>
          <div className="quick-links">
            <button onClick={() => navigate("processes")}><span><Icon name="document" /></span><div><b>Government services</b><small>Forms, guides & links</small></div><Icon name="chevron" size={16} /></button>
            <button onClick={() => navigate("directory")}><span><Icon name="people" /></span><div><b>Department directory</b><small>Find the right POC</small></div><Icon name="chevron" size={16} /></button>
          </div>
        </article>
      </section>
    </>
  );
}

const PageIntro = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) => (
  <section className="page-intro"><span className="eyebrow accent">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></section>
);

function Broadcasts() {
  const items = [
    { icon: "water" as IconName, title: "Water supply maintenance", text: "Water supply will be paused in Towers A & B tomorrow between 11:00 AM and 2:00 PM for planned pipeline work.", tag: "Important", time: "25 min ago", tone: "warning" },
    { icon: "shield" as IconName, title: "Visitor entry protocol updated", text: "From 15 May, all visitors must be pre-approved through the MyGate app. Please share the OTP only after verifying the visitor.", tag: "Security", time: "Yesterday", tone: "info" },
    { icon: "leaf" as IconName, title: "Composting drive results", text: "Together we diverted 280 kg of wet waste from landfill this month. Thank you to all participating households.", tag: "Community", time: "9 May", tone: "success" },
  ];
  return <><PageIntro eyebrow="COMMUNITY NOTICEBOARD" title="Broadcasts & notices" copy="Verified updates from your RWA team, all in one place." /><div className="filter-row"><button className="chip active">All updates</button><button className="chip">Important</button><button className="chip">Security</button><button className="chip">Community</button></div><section className="notice-stack">{items.map((item) => <article className="panel notice" key={item.title}><span className={`notice-icon ${item.tone}`}><Icon name={item.icon} /></span><div><div className="notice-top"><span className={`tag ${item.tone}`}>{item.tag}</span><time>{item.time}</time></div><h3>{item.title}</h3><p>{item.text}</p><button className="text-button">Read full notice <Icon name="arrow" size={15} /></button></div></article>)}</section></>;
}

function Processes() {
  const docs = [
    ["Tenant police verification", "Step-by-step guide and required documents", "15 min", "shield"],
    ["Voter ID address update", "Online process for shifting your constituency", "10 min", "document"],
    ["Property tax payment", "Pay online through the municipal portal", "8 min", "home"],
    ["Senior citizen registration", "Benefits, eligibility and application guide", "12 min", "people"],
  ] as const;
  return <><PageIntro eyebrow="RESIDENT RESOURCES" title="Government processes, simplified" copy="Clear, verified guides to help you complete essential civic processes." /><section className="resource-grid">{docs.map(([title, copy, time, icon]) => <article className="panel resource" key={title}><span className="resource-icon"><Icon name={icon} /></span><span className="tag success">VERIFIED GUIDE</span><h3>{title}</h3><p>{copy}</p><div><span><Icon name="clock" size={15} /> {time} read</span><button className="icon-button"><Icon name="arrow" /></button></div></article>)}</section><article className="support-strip"><span><Icon name="alert" /></span><div><h3>Can’t find the process you need?</h3><p>Send a request to the resident helpdesk and we’ll point you in the right direction.</p></div><button className="secondary-button">Request guidance</button></article></>;
}

function Directory() {
  const contacts = [
    ["RWA Administration", "Meera Kapoor", "Secretary", "011 4024 5510", "MK", "coral"],
    ["Security & Access", "Rajesh Kumar", "Chief Security Officer", "011 4024 5555", "RK", "blue"],
    ["Maintenance", "Sunil Yadav", "Facility Manager", "011 4024 5522", "SY", "green"],
    ["Municipal Liaison", "Priya Menon", "Ward Coordinator", "011 4024 5538", "PM", "gold"],
  ];
  return <><PageIntro eyebrow="WHO TO CONTACT" title="Departments & points of contact" copy="Get to the right person quickly for community and civic concerns." /><section className="directory-grid">{contacts.map(([department, name, role, phone, initials, tone]) => <article className="panel contact-card" key={department}><div className="contact-head"><span className={`contact-avatar ${tone}`}>{initials}</span><div><span className="eyebrow accent">{department}</span><h3>{name}</h3><p>{role}</p></div></div><div className="contact-actions"><a href={`tel:${phone.replaceAll(" ", "")}`}><Icon name="phone" size={17} />{phone}</a><button className="secondary-button">Message</button></div></article>)}</section></>;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [section, setSection] = useState<Section>("home");
  const [mobileNav, setMobileNav] = useState(false);
  const content = useMemo(() => {
    if (section === "home") return <Overview navigate={setSection} />;
    if (section === "polls") return <><PageIntro eyebrow="HAVE YOUR SAY" title="Community polls" copy="Your voice helps shape the decisions we make together." /><PollCard expanded /></>;
    if (section === "events") return <><PageIntro eyebrow="MEET, LEARN, CONNECT" title="Community calendar" copy="Make time for the moments that bring our neighbourhood together." /><EventsCard expanded /></>;
    if (section === "broadcasts") return <Broadcasts />;
    if (section === "processes") return <Processes />;
    return <Directory />;
  }, [section]);

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;
  return (
    <div className="app-shell">
      <Sidebar current={section} setCurrent={setSection} open={mobileNav} close={() => setMobileNav(false)} onLogout={() => setLoggedIn(false)} />
      <div className="main-column">
        <Header onMenu={() => setMobileNav(true)} />
        <main className="content">{content}</main>
        <footer>© 2025 Greenfield Residency Welfare Association <span>Privacy · Help & support</span></footer>
      </div>
    </div>
  );
}

export default App;
