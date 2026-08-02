/**
 * Mobile Native American STEM & AI Server Infrastructure Funding Database
 * Published by Add Interactive Studio
 */

const FUNDING_DATA = [
  // ==========================================
  // FEDERAL GRANTS (BLUE / CYAN TIER)
  // ==========================================
  {
    id: "fed-01",
    title: "NSF TCUP - Cyberinfrastructure Health, Assistance, and Improvements (CHAI)",
    provider: "National Science Foundation (NSF)",
    category: "federal",
    level: "National",
    targetAudience: "Tribal Colleges & Universities (TCUs)",
    aiServerEligible: true,
    maxFunding: "$500,000 - $1,500,000",
    matchingReq: "None",
    deadline: "Annual Window (September / March)",
    colorCode: "cyan",
    summary: "Dedicated NSF strand for TCUs to build computational capacity, acquire AI server hardware, establish high-performance compute clusters, and upgrade campus network backbone.",
    eligibility: [
      "Must be an accredited Tribal College or University (1994 Land-Grant status).",
      "Alaska Native-Serving and Native Hawaiian-Serving institutions.",
      "Must demonstrate institutional commitment to STEM & AI research capacity."
    ],
    allowedCosts: [
      "On-campus AI GPU servers (e.g. NVIDIA HGX/DGX or Multi-GPU workstations).",
      "High-speed campus networking (10GbE/100GbE switches, fiber interconnects).",
      "Storage Area Networks (SAN) and high-speed NVMe storage arrays.",
      "Faculty/IT technical training and cyberinfrastructure personnel salary."
    ],
    applicationProcedure: [
      "Register institution in SAM.gov (obtain active UEI and CAGE code).",
      "Submit preliminary proposal or consult with NSF TCUP Program Officer.",
      "Draft full proposal via Research.gov incorporating Data Management and Data Sovereignty plans.",
      "Include itemized vendor hardware quotes for server and networking infrastructure.",
      "Submit before specified deadline and await panel peer review."
    ],
    officialUrl: "https://new.nsf.gov/funding/opportunities/tribal-colleges-universities-program-tcup"
  },
  {
    id: "fed-02",
    title: "NSF TCUP - Targeted STEM Infusion Projects (TSIP)",
    provider: "National Science Foundation (NSF)",
    category: "federal",
    level: "National",
    targetAudience: "Tribal Colleges & Universities (TCUs)",
    aiServerEligible: true,
    maxFunding: "$500,000 over 3 Years",
    matchingReq: "None",
    deadline: "Annual Window (October)",
    colorCode: "cyan",
    summary: "Supports expansion of AI, Data Science, and Computer Science degree programs at TCUs, funding modern teaching labs and hands-on AI computing hardware.",
    eligibility: [
      "Federally recognized TCUs and Native-serving institutions.",
      "Must focus on adding or expanding a STEM/AI degree, track, or certificate."
    ],
    allowedCosts: [
      "AI classroom server racks and student workstation nodes.",
      "Curriculum development for artificial intelligence, machine learning, and data ethics.",
      "Laboratory equipment and software licenses."
    ],
    applicationProcedure: [
      "Establish faculty lead (PI) registered in Research.gov.",
      "Develop curriculum plan aligned with AI industry and tribal community priorities.",
      "Include detailed budget justification for hardware and software procurement.",
      "Submit proposal via Research.gov under TCUP TSIP solicitation."
    ],
    officialUrl: "https://new.nsf.gov/funding/opportunities/tribal-colleges-universities-program-tcup"
  },
  {
    id: "fed-03",
    title: "Dept. of Education - Research and Development Infrastructure (RDI) Program",
    provider: "U.S. Department of Education (OPE)",
    category: "federal",
    level: "National",
    targetAudience: "TCUs & NASNTIs (Higher Ed)",
    aiServerEligible: true,
    maxFunding: "$3,000,000 - $5,000,000",
    matchingReq: "None required",
    deadline: "Bi-annual (Summer Cycle)",
    colorCode: "cyan",
    summary: "Large-scale federal grant program enabling Minority-Serving Institutions (including TCUs and NASNTIs) to build transformational research compute centers and data labs.",
    eligibility: [
      "Accredited TCUs or Native American-Serving Nontribal Institutions (NASNTIs) with >10% undergraduate Native American enrollment.",
      "Public or non-profit private higher education institutions."
    ],
    allowedCosts: [
      "Construction or renovation of AI compute room / server room facilities.",
      "High-end enterprise AI server racks, cooling infrastructure, and back-up power (UPS).",
      "Broadband and high-performance computing IT infrastructure upgrade.",
      "Postdoctoral researchers and research staff salaries."
    ],
    applicationProcedure: [
      "Verify eligibility designation via Department of Education Matrix.",
      "Formulate 5-year institutional R&D plan centered on AI/STEM research.",
      "Obtain architectural and technical vendor estimates for AI server room deployment.",
      "Submit application through Grants.gov under ALN 84.116FC."
    ],
    officialUrl: "https://www2.ed.gov/programs/rdi/index.html"
  },
  {
    id: "fed-04",
    title: "Dept. of Education - NASNTI Title III Part F & Part A Capacity Grants",
    provider: "U.S. Department of Education",
    category: "federal",
    level: "National",
    targetAudience: "NASNTIs (Native-Serving Nontribal Institutions)",
    aiServerEligible: true,
    maxFunding: "$450,000/year ($2.25M over 5 Years)",
    matchingReq: "None",
    deadline: "Annual Window (Spring)",
    colorCode: "cyan",
    summary: "Provides targeted multi-year funding to colleges serving Native American students to purchase scientific, laboratory, and high-performance computer hardware.",
    eligibility: [
      "Degree-granting institutions with at least 10% Native American undergraduate student enrollment.",
      "Low average educational and general expenditures per student."
    ],
    allowedCosts: [
      "Purchase of AI server nodes, GPUs, and virtualized compute cluster hardware.",
      "Faculty technology training and STEM student tutoring labs.",
      "Renovation of computer instructional spaces."
    ],
    applicationProcedure: [
      "Obtain official NASNTI eligibility certification from ED.",
      "Complete comprehensive institutional needs assessment for STEM technology.",
      "Draft proposal narrative mapping AI technology to Native student retention.",
      "Submit via Grants.gov."
    ],
    officialUrl: "https://www2.ed.gov/programs/nasnti/index.html"
  },
  {
    id: "fed-05",
    title: "BIE Education Technology & Infrastructure Innovation Grants",
    provider: "Bureau of Indian Education (BIE)",
    category: "federal",
    level: "National",
    targetAudience: "K-12 Tribal & BIE Schools",
    aiServerEligible: true,
    maxFunding: "$150,000 - $750,000 per school",
    matchingReq: "None",
    deadline: "Annual Window (Fall)",
    colorCode: "cyan",
    summary: "Funds modern technology equipment, K-12 STEM server labs, and computer science learning infrastructure in BIE-operated and tribally controlled grant schools.",
    eligibility: [
      "BIE-operated K-12 schools.",
      "Tribally Controlled Grant Schools under Public Law 100-297 or Contract Schools under PL 93-638."
    ],
    allowedCosts: [
      "On-site micro AI server nodes for local K-12 STEM labs.",
      "Student STEM workstations, robotics equipment, and AI learning kits.",
      "Local Area Network (LAN) upgrades, Wi-Fi 6 access points, and power protection."
    ],
    applicationProcedure: [
      "School Board approval of Technology Integration Plan.",
      "Submit application through BIE Native Education portal / Native All-Grant System.",
      "Provide hardware quotes from GSA schedule or approved vendors."
    ],
    officialUrl: "https://www.bie.edu/"
  },

  // ==========================================
  // ALASKA & HAWAII GRANTS
  // ==========================================
  {
    id: "ak-01",
    title: "U.S. Dept. of Education - Alaska Native Education (ANE) Program",
    provider: "U.S. Department of Education (OESE)",
    category: "state",
    level: "State - Alaska",
    targetAudience: "Alaska Native Corporations, Villages, Tribes & K-12 Schools",
    aiServerEligible: true,
    maxFunding: "$500,000 - $2,000,000",
    matchingReq: "None",
    deadline: "Annual Window (Spring)",
    colorCode: "amber",
    summary: "Dedicated federal grant program for Alaska Native entities to implement STEM education, technology integration, student enrichment, and local server-assisted learning labs.",
    eligibility: [
      "Alaska Native Organizations, Alaska Native Regional Corporations, Tribal Villages, and rural Alaska School Districts."
    ],
    allowedCosts: [
      "STEM computer lab servers, satellite-synced micro AI nodes, and student workstations.",
      "Alaska Native language digitizing hardware and STEM curricula.",
      "Teacher training in computer science and artificial intelligence."
    ],
    applicationProcedure: [
      "Submit application packet via Grants.gov under ALN 84.356A.",
      "Include memorandum of agreement (MOA) between Alaska Native Organization and local school district."
    ],
    officialUrl: "https://oese.ed.gov/"
  },
  {
    id: "ak-county-01",
    title: "North Slope Borough (AK) STEM & Arctic Compute Infrastructure Grants",
    provider: "North Slope Borough School District & Native Village of Utqiaġvik",
    category: "county",
    level: "County - North Slope Borough (AK)",
    targetAudience: "Inupiat K-12 Schools & Ilisaġvik College",
    aiServerEligible: true,
    maxFunding: "$100,000 - $500,000",
    matchingReq: "None",
    deadline: "Annual Window (Fall)",
    colorCode: "rose",
    summary: "Borough tax revenue and tribal grants providing high-speed compute servers, AI environmental monitoring hardware, and STEM labs for Arctic Inupiat communities.",
    eligibility: [
      "Schools and community learning centers within the North Slope Borough (Utqiaġvik, Point Hope, Anaktuvuk Pass)."
    ],
    allowedCosts: [
      "Ruggedized Arctic server racks, NVMe storage, satellite-to-local caching servers, and student AI workstations."
    ],
    applicationProcedure: [
      "Submit application to North Slope Borough Education Department."
    ],
    officialUrl: "https://www.nsbsd.org/"
  },
  {
    id: "hi-01",
    title: "U.S. Dept. of Education - Native Hawaiian Education Program (NHEP)",
    provider: "U.S. Department of Education (OESE)",
    category: "state",
    level: "State - Hawaii",
    targetAudience: "Native Hawaiian Organizations, Charter Schools & UH System",
    aiServerEligible: true,
    maxFunding: "$300,000 - $1,200,000",
    matchingReq: "None",
    deadline: "Annual Window (Spring)",
    colorCode: "amber",
    summary: "Federal grant supporting innovative educational programs, STEM technology infrastructure, Hawaiian language digitization, and AI instructional labs.",
    eligibility: [
      "Native Hawaiian educational organizations, Hawaiian language immersion schools, Hawaii DOE schools, and UH System campuses."
    ],
    allowedCosts: [
      "AI servers for Hawaiian language natural language processing (NLP) and audio archiving.",
      "STEM computer lab equipment, student workstations, and digital media servers."
    ],
    applicationProcedure: [
      "Submit application package through Grants.gov under ALN 84.362A."
    ],
    officialUrl: "https://oese.ed.gov/"
  },

  // ==========================================
  // STATE & COUNTY GRANTS
  // ==========================================
  {
    id: "state-az-01",
    title: "Arizona Commerce Authority - Tribal Broadband & STEM Tech Grant",
    provider: "State of Arizona / ACA",
    category: "state",
    level: "State - Arizona",
    targetAudience: "AZ Tribal Nations, TCUs (Diné, TOCC), K-12",
    aiServerEligible: true,
    maxFunding: "$250,000 - $1,500,000",
    matchingReq: "10% matching preferred",
    deadline: "Annual Window (Summer)",
    colorCode: "amber",
    summary: "State-funded grant supporting digital infrastructure, AI campus compute nodes, and STEM equipment for Arizona's 22 federally recognized Tribal Nations.",
    eligibility: [
      "Arizona Tribal Nations, Diné College, Tohono O'odham Community College (TOCC), and AZ Tribal school districts."
    ],
    allowedCosts: [
      "On-site server racks and campus network distribution hardware.",
      "STEM computer lab buildouts in rural and reservation schools.",
      "High-speed fiber connectivity to server nodes."
    ],
    applicationProcedure: [
      "Tribal Resolution or College Executive authorization.",
      "Submit application through ACA e-Grants system."
    ],
    officialUrl: "https://www.azcommerce.com/broadband/"
  },
  {
    id: "az-county-01",
    title: "SRP STEM Classroom Grants (Apache, Navajo, Gila, Coconino)",
    provider: "Salt River Project (SRP) & APS Foundation",
    category: "county",
    level: "County - Apache/Navajo/Coconino (AZ)",
    targetAudience: "Navajo, Hopi & Apache Reservation K-12 Schools",
    aiServerEligible: true,
    maxFunding: "$5,000 - $25,000 per school",
    matchingReq: "None",
    deadline: "Annual Window (Nov - Feb)",
    colorCode: "rose",
    summary: "Utility foundation grants providing direct funding for STEM computer labs, student AI coding kits, and micro-server nodes in northern Arizona reservation schools.",
    eligibility: [
      "Public and tribally controlled K-12 schools in Apache, Navajo, Coconino, and Gila counties."
    ],
    allowedCosts: [
      "Classroom AI workstations, coding software, robotics kits, and STEM lab hardware."
    ],
    applicationProcedure: [
      "Submit online application via SRP Community Grants portal."
    ],
    officialUrl: "https://www.srpnet.com/community/education/grants"
  },
  {
    id: "state-nm-01",
    title: "New Mexico Tribal Infrastructure Fund (TIF) & Capital Outlay STEM Grants",
    provider: "NM Indian Affairs Department & Higher Education Dept",
    category: "state",
    level: "State - New Mexico",
    targetAudience: "NM Pueblos, Tribes, Navajo Nation & TCUs (SIPI, Navajo Tech)",
    aiServerEligible: true,
    maxFunding: "$500,000 - $3,000,000",
    matchingReq: "None",
    deadline: "Annual Capital Outlay Window (January / June)",
    colorCode: "amber",
    summary: "State legislative capital funding dedicated to technology infrastructure, AI servers, and computer labs for New Mexico Tribal Colleges (SIPI, NTU) and Pueblo schools.",
    eligibility: [
      "New Mexico Nations, Tribes, Pueblos, Southwestern Indian Polytechnic Institute (SIPI), and Navajo Technical University (NTU)."
    ],
    allowedCosts: [
      "Building and equipping AI computer centers and hardware server rooms.",
      "High-performance GPU servers, SAN storage, and uninterruptible power systems."
    ],
    applicationProcedure: [
      "Submit TIF Project Proposal to NM Indian Affairs Department."
    ],
    officialUrl: "https://www.iad.state.nm.us/funding/tribal-infrastructure-fund/"
  },
  {
    id: "state-ca-01",
    title: "CPUC California Tribal Broadband & Tech Capacity Grants",
    provider: "California Public Utilities Commission (CPUC)",
    category: "state",
    level: "State - California",
    targetAudience: "CA Tribal Governments & Tribal Education Centers",
    aiServerEligible: true,
    maxFunding: "$150,000 - $1,000,000",
    matchingReq: "None (100% funding available)",
    deadline: "Quarterly Application Windows",
    colorCode: "amber",
    summary: "Provides 100% grant funding for California Native American tribes to build local digital infrastructure, campus servers, and community computer labs.",
    eligibility: [
      "Federally recognized and non-federally recognized California Native American Tribes."
    ],
    allowedCosts: [
      "Local server hardware, networking gear, and data center racks."
    ],
    applicationProcedure: [
      "Submit Letter of Intent to CPUC Communications Division."
    ],
    officialUrl: "https://www.cpuc.ca.gov/tribalbroadband"
  },

  // ==========================================
  // TECH CORPORATE GRANTS
  // ==========================================
  {
    id: "corp-01",
    title: "NVIDIA Academic Hardware Grant & DLI University Ambassador Program",
    provider: "NVIDIA Corporation",
    category: "corporate",
    level: "National",
    targetAudience: "TCUs, NASNTIs & STEM Educators",
    aiServerEligible: true,
    maxFunding: "Direct Hardware Donation ($15,000 - $120,000)",
    matchingReq: "None",
    deadline: "Quarterly Calls for Proposals",
    colorCode: "purple",
    summary: "Donates high-performance NVIDIA RTX/A100/H100 GPUs, workstation servers, and cloud computing credits directly to educators and researchers at Native-serving institutions.",
    eligibility: [
      "Full-time faculty or IT/Research lead at accredited TCUs or STEM non-profits."
    ],
    allowedCosts: [
      "Enterprise NVIDIA GPU server accelerators (e.g. RTX 6000 Ada, A100, L40S)."
    ],
    applicationProcedure: [
      "Join free NVIDIA Developer Program and submit proposal via Hardware Portal."
    ],
    officialUrl: "https://developer.nvidia.com/academic-hardware-grant-program"
  },
  {
    id: "corp-02",
    title: "Microsoft Tech for Social Impact - AI for Good Grant",
    provider: "Microsoft Philanthropies",
    category: "corporate",
    level: "National",
    targetAudience: "TCUs, Tribal Non-Profits & K-12",
    aiServerEligible: true,
    maxFunding: "$50,000 - $250,000 (Hardware + Azure AI Credits)",
    matchingReq: "None",
    deadline: "Rolling Applications",
    colorCode: "purple",
    summary: "Provides hybrid AI infrastructure funding, donating hybrid Azure Stack Edge server hardware, surface devices, and annual Azure AI cloud credits to Tribal institutions.",
    eligibility: [
      "Tribal 501(c)(3) entities, TCUs, or Tribally chartered educational entities."
    ],
    allowedCosts: [
      "On-premises Azure Stack Edge AI servers and hybrid cloud gateway hardware."
    ],
    applicationProcedure: [
      "Verify nonprofit / Tribal eligibility on Microsoft Non-Profit Hub."
    ],
    officialUrl: "https://www.microsoft.com/en-us/nonprofits/eligibility"
  }
];
