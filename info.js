const hybridAgileContent = require('!!raw-loader!./src/assets/articles/hybrid-agile.md').default;
const riskMgmtContent = require('!!raw-loader!./src/assets/articles/risk-management-it-projects.md').default;
const stakeholderContent = require('!!raw-loader!./src/assets/articles/stakeholder-management-playbook.md').default;
const pmTrendsContent = require('!!raw-loader!./src/assets/articles/pm-trends-2025.md').default;

let info = {
  name: "Sai Harini Devarakonda",
  logo_name: "harini",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm a project coordinator moving into project management, with delivery experience across healthcare and technology. At NHS Professionals I coordinated workforce projects across NHS Trusts and around 50 agencies: planning onboarding workstreams, tracking monthly budgets for 30+ departments, managing risks and blockers, and reporting KPIs to Trust leaders in Power BI. By streamlining the process I cut hiring discrepancies to zero and turnaround from three weeks to one and a half.<br><br>Today I volunteer as Junior Project Manager at Reco Genie, an AI start-up, where I run sprint planning and daily stand-ups in Jira, coordinate testing and releases, and turn customer feedback into a prioritised backlog. Earlier, at Vega Prosys, I led a small development team and delivered a six-month project in three. I'm CAPM certified, working towards PRINCE2 Practitioner, and hold a Master's in Business Management from the University of Strathclyde.",
  hero: {
    eyebrow: "Project Management Portfolio",
    role: "Project Coordinator \u00b7 Junior Project Manager \u00b7 CAPM Certified",
    tagline:
      "I plan, coordinate and deliver projects across healthcare and technology. I run sprints and releases at an AI start-up today, and before that coordinated multi-Trust workforce projects for the NHS.",
    stats: [
      { value: "2\u00d7", label: "faster: a 6-month project delivered in 3" },
      { value: "50", label: "agencies coordinated across 2 to 3 NHS Trusts" },
      { value: "30+", label: "department budgets tracked monthly in SAP" },
      { value: "0%", label: "compliance errors after streamlining weekly checks (from 5%)" }
    ]
  },
  links: {
    linkedin: "https://www.linkedin.com/in/harinidevarakonda",
    github: "https://github.com/Sai-Devarakonda",
    angellist: "",
    resume:
      "https://github.com/Sai-Devarakonda/myportfolio/blob/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "University of Strathclyde",
      place: "United Kingdom",
      date: "2023 - 2024",
      degree: "Master's in Business Management (MBM)",
      gpa: "",
      description:
        "Completed a Master's in Business Management including modules in Project Management and Service Operations Management. Thesis on Differentiated Risk Management Strategies in IT Service Projects.",
      skills: [
        "Project Management",
        "Risk Management",
        "Service Operations Management",
        "Business Strategy"
      ]
    },
    {
      name: "JNTUK University",
      place: "India",
      date: "2016 - 2020",
      degree: "Bachelor of Technology (Electronics and Communication Engineering)",
      gpa: "",
      description:
        "Completed a Bachelor of Technology degree providing a strong foundation in analytical thinking, problem solving, and technical skills.",
      skills: [
        "Analytical Thinking",
        "Problem Solving",
        "Technical Foundations"
      ]
    }
  ],
  experience: [
    {
      name: "Reco Genie",
      place: "United Kingdom",
      date: "Apr, 2026 - Present",
      position: "Junior Project Manager (Voluntary)",
      description:
        "Coordinate delivery for an AI platform that helps local restaurants and small businesses automate daily tasks and forecast customer demand. Maintain the Jira board, run daily stand-ups and sprint planning, and write release notes for new features. With no dedicated QA team, I test new web workflows and dashboards on desktop and mobile before release. I also onboard early-adopter restaurants, turn their feedback into prioritised product requirements, and clean the sales and menu data used to train the forecasting model.",
      skills: ["Jira & Confluence", "Sprint Planning", "Release Management", "UAT", "Backlog Prioritisation", "Customer Onboarding"]
    },
    {
      name: "NHS Professionals (NHSP)",
      place: "United Kingdom",
      date: "May, 2025 - May, 2026",
      position: "Trust Recruitment Coordinator (Workforce Project Coordination)",
      description:
        "Role scope expanded following an organisational restructure to include end-to-end workforce project coordination, planning, stakeholder governance and cross-Trust operational change. Coordinated concurrent onboarding workstreams across 2 to 3 NHS Trusts and around 50 agencies, handling 200 to 300 candidates a week. Streamlined the hiring process to cut discrepancies from 2-3% to zero and turnaround from 3 weeks to 1.5 weeks, and automated weekly compliance checks to bring errors from 5% to zero. Reported onboarding and performance KPIs to Trust leaders through Power BI dashboards, and tracked monthly budgets for 30+ departments in SAP to reduce agency spend.",
      skills: ["Project Coordination", "Stakeholder Management", "Power BI", "KPI Reporting", "Process Improvement", "Budget Tracking"]
    },
    {
      name: "William Hill (888)",
      place: "United Kingdom",
      date: "Sep, 2024 - Jan, 2025",
      position: "Store Manager / Customer Service Executive (Part-Time)",
      description:
        "Ran daily store operations, including transaction processing and end-of-shift financial reporting with zero discrepancies. Ensured compliance with age verification, responsible gambling and anti-money laundering procedures, and managed stock levels.",
      skills: ["Operations", "Regulatory Compliance", "Financial Reporting", "Team Coordination"]
    },
    {
      name: "Won Connect",
      place: "United Kingdom",
      date: "May, 2024 - Jan, 2025",
      position: "Digital Marketing Intern",
      description:
        "Planned and coordinated multi-channel campaigns across Facebook, Instagram, LinkedIn and email, managing content schedules and deliverables. Tracked performance in Google Analytics and turned the results into reports that shaped the next round of campaigns.",
      skills: ["Campaign Coordination", "Google Analytics", "Performance Reporting", "Content Planning"]
    },
    {
      name: "Cognizant Technology Solutions",
      place: "India",
      date: "Feb, 2022 - Aug, 2023",
      position: "Associate Consultant / Developer",
      description:
        "Worked on geospatial data quality for Apple Maps, analysing and validating datasets in SQL with engineering, QA and product teams. Supported Agile delivery through sprint planning, backlog refinement and stakeholder updates, captured business requirements in client meetings, and presented KPI reports to senior management. Mentored junior analysts and was promoted to a senior team within three months.",
      skills: ["Agile", "Sprint Planning", "Backlog Refinement", "Stakeholder Reporting", "SQL"]
    },
    {
      name: "Vega Prosys",
      place: "India",
      date: "Feb, 2021 - Feb, 2022",
      position: "Content Manager",
      description:
        "Led a team of intern developers building full-stack web applications on the MERN stack, gathering client requirements and effort estimates at the start of each project. Reworked the team's workflow using Agile practices, removing bottlenecks and aligning stakeholders, and delivered a six-month project in three months.",
      skills: ["Agile Delivery", "Team Leadership", "Effort Estimation", "Workflow Optimisation", "MERN Stack"]
    },
    {
      name: "IT Aspects",
      place: "India",
      date: "Feb, 2020 - Feb, 2021",
      position: "Full-Stack Developer",
      description:
        "Built and maintained client web applications in PHP (Laravel, Yii2, CodeIgniter) and React.js, working directly with clients to clarify requirements and priorities. Resolved a critical payment gateway failure on a live charity website, restoring transactions, and contributed to SEO and content improvements.",
      skills: ["Client Management", "Technical Delivery", "Issue Resolution", "PHP & React"]
    }
  ],
  skills: [
    {
      title: "planning & delivery",
      info: [
        "Project Planning & Scheduling",
        "Milestones & Dependencies",
        "Resource & Capacity Planning",
        "Budget Tracking",
        "Sprint Planning & Stand-ups",
        "Backlog Management",
        "Release Management",
        "UAT Coordination",
        "SDLC"
      ],
      icon: "fa fa-calendar-check-o"
    },
    {
      title: "governance & risk",
      info: [
        "RAID Logs",
        "Risk Registers",
        "Issue Escalation",
        "Change Control",
        "Status & Steering Reporting",
        "KPI Dashboards",
        "Compliance & Audit Readiness",
        "Decision Matrix Analysis"
      ],
      icon: "fa fa-shield"
    },
    {
      title: "stakeholders & teams",
      info: [
        "Stakeholder Mapping & Engagement",
        "Workshop Facilitation",
        "Requirements Gathering",
        "Vendor & Agency Coordination",
        "Team Leadership & Mentoring",
        "Customer Onboarding",
        "Cross-functional Collaboration"
      ],
      icon: "fa fa-users"
    },
    {
      title: "methods",
      info: [
        "Agile (Scrum)",
        "Waterfall",
        "Hybrid Delivery",
        "PRINCE2 Principles",
        "PMI Standards (CAPM)",
        "Lean Six Sigma",
        "Process Mapping & Improvement",
        "Gap & Impact Analysis"
      ],
      icon: "fa fa-sitemap"
    },
    {
      title: "tools",
      info: [
        "Jira",
        "Confluence",
        "Azure DevOps",
        "Microsoft Planner",
        "Basecamp",
        "Power BI",
        "Tableau",
        "SQL",
        "Advanced Excel",
        "SAP",
        "Microsoft Dynamics 365",
        "SharePoint",
        "Miro",
        "Slack",
        "Microsoft Copilot & Claude"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "certifications",
      info: [
        "CAPM (PMI)",
        "PRINCE2 Practitioner (in progress)",
        "Project Management Foundations",
        "Lean Six Sigma Foundations",
        "Web Development (Tech Mahindra)"
      ],
      icon: "fa fa-certificate"
    }
  ],
  portfolio: [
    {
      name: "Reco Genie: Sprint Delivery at an AI Start-up",
      pictures: [],
      technologies: ["Jira", "Confluence", "Sprint Planning", "UAT", "Release Notes"],
      category: "Project Management",
      date: "2026",
      github: "",
      visit: "",
      description:
        "Ongoing voluntary role coordinating delivery for an AI platform that helps local restaurants automate daily tasks and forecast demand. I set up and run the sprint process in Jira, test every release by hand before it goes live, write release notes, and turn feedback from early-adopter restaurants (for example, a bakery wanting forecasts to account for rainy days) into prioritised requirements."
    },
    {
      name: "Agile Product Launch",
      pictures: [],
      technologies: ["Agile", "Product Management", "Sprint Planning", "Delivery"],
      category: "Project Management",
      date: "2023 - 2024",
      github: "",
      visit: "",
      description:
        "Applied Agile methodology to design and successfully launch a product, ensuring smooth project execution through iterative delivery, stakeholder collaboration, and continuous improvement practices."
    },
    {
      name: "Agile Sprint Tracker Dashboard",
      pictures: [],
      technologies: ["HTML", "CSS", "JavaScript", "Agile", "Sprint Planning"],
      category: "Project Management",
      date: "2025",
      github: "https://github.com/Sai-Devarakonda/agile-sprint-tracker",
      visit: "https://sai-devarakonda.github.io/agile-sprint-tracker/",
      description:
        "An interactive sprint planning and tracking dashboard built with HTML/CSS/JS. Features a burndown chart, backlog management, RAID log tracker, and sprint velocity metrics, helping Agile teams visualise and manage delivery without complex tooling."
    },
    {
      name: "IT Risk Management Framework",
      pictures: [],
      technologies: ["Risk Management", "RAID Log", "IT Projects", "Qualitative Research", "Governance"],
      category: "Research",
      date: "2024 - 2025",
      github: "https://github.com/Sai-Devarakonda/it-risk-management-framework",
      visit: "https://github.com/Sai-Devarakonda/it-risk-management-framework",
      description:
        "Built from my Master's thesis, a qualitative study of how risk management strategies differ across IT service projects for clients in different industries. Turns the findings into a practical framework: risk classification matrices, probability and impact scoring, mitigation templates, and governance reporting structures aligned with PMI standards."
    }
  ],
  portfolio_design: [],
  articles: [
    {
      title: "Hybrid Agile: Why One-Size-Fits-All No Longer Works",
      date: "March 2025",
      category: "Project Management",
      tags: ["Agile", "Hybrid Delivery", "SAFe", "Waterfall", "Governance"],
      summary: "Organisations are blending Agile and Waterfall into hybrid models for compliance-heavy sectors like healthcare. This article breaks down when and how to apply each approach.",
      content: hybridAgileContent
    },
    {
      title: "Risk Management in IT Projects: A Framework That Works",
      date: "February 2025",
      category: "Risk Management",
      tags: ["Risk", "RAID Log", "IT Projects", "Frameworks", "PMI"],
      summary: "Drawing from research across industries, this article outlines a practical risk identification, scoring, and mitigation framework for IT service projects, from RAID logs to governance dashboards.",
      content: riskMgmtContent
    },
    {
      title: "Stakeholder Management: A Project Coordinator's Playbook",
      date: "January 2025",
      category: "Delivery Skills",
      tags: ["Stakeholders", "Communication", "Workshops", "Power-Interest Grid"],
      summary: "A step-by-step guide to mapping, engaging, and managing stakeholders throughout a project, covering power/interest grids, communication planning, and facilitating productive workshops.",
      content: stakeholderContent
    },
    {
      title: "Latest Trends in Project Management for 2025",
      date: "December 2024",
      category: "Trends",
      tags: ["Project Management", "2025 Trends", "AI in PM", "Value Delivery"],
      summary: "From AI-assisted project planning and outcome-driven delivery to sustainability in projects and distributed team management, the key PM trends shaping organisations in 2025.",
      content: pmTrendsContent
    }
  ],
  recommendations: []
};

export default info;
