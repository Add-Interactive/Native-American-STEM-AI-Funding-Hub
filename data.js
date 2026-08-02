/**
 * Native American STEM & AI Server Infrastructure Funding Database
 * Published by Add Interactive Studio
 * Categories: federal, corporate, philanthropic, state, county
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
  {
    id: "fed-06",
    title: "USDA NIFA - Tribal Colleges Research Grants Program (TCRGP)",
    provider: "USDA National Institute of Food and Agriculture",
    category: "federal",
    level: "National",
    targetAudience: "Tribal Colleges & Universities (1994s)",
    aiServerEligible: true,
    maxFunding: "$200,000 - $650,000",
    matchingReq: "None (Waiver for 1994s)",
    deadline: "Annual Window (April)",
    colorCode: "cyan",
    summary: "Supports agricultural, environmental, and geospatial research at TCUs, explicitly encouraging the deployment of AI, edge compute servers, and remote sensing technology.",
    eligibility: [
      "1994 Land-Grant Institutions (Tribal Colleges)."
    ],
    allowedCosts: [
      "Edge-AI compute servers for environmental data modeling and agricultural monitoring.",
      "GIS server hardware, drone payload compute, and environmental sensors.",
      "Stipends for undergraduate Native student researchers."
    ],
    applicationProcedure: [
      "Formulate research proposal integrating AI/computing with tribal land management.",
      "Submit via Grants.gov under USDA-NIFA-TCRGP solicitation.",
      "Ensure compliance with USDA peer-review criteria."
    ],
    officialUrl: "https://www.nifa.usda.gov/grants/funding-opportunities/tribal-colleges-research-grants-program"
  },

  // ==========================================
  // ALASKA STATE & BOROUGH GRANTS
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
    officialUrl: "https://oese.ed.gov/offices/office-of-discretionary-grants-support-services/well-rounded-education-programs/alaska-native-education-program-ane/"
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
    id: "ak-county-02",
    title: "Yukon-Koyukuk & Lower Kuskokwim Rural Tech & Micro-Server Grants",
    provider: "Yukon-Koyukuk & Lower Kuskokwim REAA School Districts",
    category: "county",
    level: "County - Yukon-Koyukuk / Bethel (AK)",
    targetAudience: "Rural Alaska Native Village Schools",
    aiServerEligible: true,
    maxFunding: "$50,000 - $300,000",
    matchingReq: "None",
    deadline: "Annual Window (Winter)",
    colorCode: "rose",
    summary: "Regional educational attendance area grants for off-grid Yup'ik and Athabascan village schools to install satellite-buffered micro AI servers and STEM labs.",
    eligibility: [
      "Tribal village schools in Yukon-Koyukuk, Bethel, and Kusilvak census areas."
    ],
    allowedCosts: [
      "Micro GPU server nodes, solar/battery backup power, and digital media processing equipment."
    ],
    applicationProcedure: [
      "Submit proposal through REAA District Superintendent Office."
    ],
    officialUrl: "https://www.yksd.com/"
  },

  // ==========================================
  // ARIZONA STATE & COUNTY GRANTS
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
      "Submit application through ACA e-Grants system.",
      "Provide detailed technical specification for campus compute lab."
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
    id: "az-county-02",
    title: "Coconino County Educational Service Agency (CCESA) STEM Innovation Grant",
    provider: "Coconino County Board of Supervisors & CCESA",
    category: "county",
    level: "County - Coconino (AZ)",
    targetAudience: "Tuba City, Supai, Hopi & Flagstaff Native Schools",
    aiServerEligible: true,
    maxFunding: "$15,000 - $75,000",
    matchingReq: "None",
    deadline: "Annual Window (Fall)",
    colorCode: "rose",
    summary: "County educational service grants to equip rural schools serving Native American youth with updated computer servers, STEM labs, and teacher training.",
    eligibility: [
      "Public, charter, and tribal schools operating within Coconino County."
    ],
    allowedCosts: [
      "Server hardware, student laptops, robotics equipment, and teacher professional development."
    ],
    applicationProcedure: [
      "Submit proposal form to CCESA Innovation Division."
    ],
    officialUrl: "https://coconino.az.gov/1531/Educational-Services-Agency"
  },

  // ==========================================
  // NEW MEXICO STATE & COUNTY GRANTS
  // ==========================================
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
      "High-performance GPU servers, SAN storage, and uninterruptible power systems.",
      "Fiber interconnects across tribal campuses."
    ],
    applicationProcedure: [
      "Submit TIF Project Proposal to NM Indian Affairs Department.",
      "Present project at Legislative Capital Outlay hearings.",
      "Execute state grant agreement upon legislative appropriation."
    ],
    officialUrl: "https://www.iad.state.nm.us/funding/tribal-infrastructure-fund/"
  },
  {
    id: "nm-county-01",
    title: "San Juan & McKinley County (NM) Tribal STEM Infrastructure Grants",
    provider: "San Juan & McKinley County Commission / LANL Foundation",
    category: "county",
    level: "County - San Juan/McKinley (NM)",
    targetAudience: "Shiprock, Gallup & Zuni Pueblo Schools",
    aiServerEligible: true,
    maxFunding: "$20,000 - $100,000",
    matchingReq: "None",
    deadline: "Annual Window (Fall)",
    colorCode: "rose",
    summary: "County educational tax allocations and Los Alamos National Laboratory (LANL) Foundation grants for computer science server labs in northwestern NM.",
    eligibility: [
      "K-12 schools, community learning centers, and NTU satellite campuses in San Juan and McKinley counties."
    ],
    allowedCosts: [
      "AI server workstations, student laptops, robotics kits, and high-speed local network equipment."
    ],
    applicationProcedure: [
      "Apply through LANL Foundation Community Grants portal."
    ],
    officialUrl: "https://lanlfoundation.org/"
  },
  {
    id: "nm-county-02",
    title: "Sandoval & Rio Arriba County Pueblo & Apache Tech Grants",
    provider: "Sandoval/Rio Arriba Commission & Northern NM STEAM Coalition",
    category: "county",
    level: "County - Sandoval/Rio Arriba (NM)",
    targetAudience: "Jemez, Zia, Santo Domingo Pueblos & Jicarilla Apache",
    aiServerEligible: true,
    maxFunding: "$15,000 - $80,000",
    matchingReq: "None",
    deadline: "Annual Window (Spring)",
    colorCode: "rose",
    summary: "County regional grants providing STEM equipment, computer server nodes, and AI learning software for Pueblo and Jicarilla Apache schools.",
    eligibility: [
      "Pueblo education departments and public school districts in Sandoval and Rio Arriba counties."
    ],
    allowedCosts: [
      "Desktop AI server nodes, coding software, and lab monitors."
    ],
    applicationProcedure: [
      "Submit application to Northern NM STEAM Coalition."
    ],
    officialUrl: "https://www.sandovalcountynm.gov/"
  },

  // ==========================================
  // NORTH CAROLINA & CHEROKEE COUNTY GRANTS
  // ==========================================
  {
    id: "nc-county-01",
    title: "Cherokee Preservation Foundation STEM & Tech Infrastructure Grants",
    provider: "Cherokee Preservation Foundation & Eastern Band of Cherokee",
    category: "county",
    level: "County - Swain/Jackson (NC)",
    targetAudience: "Eastern Band of Cherokee Indians (EBCI) Schools & Labs",
    aiServerEligible: true,
    maxFunding: "$25,000 - $150,000",
    matchingReq: "None",
    deadline: "Bi-annual Window (March / September)",
    colorCode: "rose",
    summary: "Dedicated tribal preservation foundation grants providing capital for computer server labs, Cherokee language digitization servers, and STEM workstations.",
    eligibility: [
      "Cherokee Central Schools, EBCI tribal programs, and Swain/Jackson County public schools serving tribal youth."
    ],
    allowedCosts: [
      "AI server hardware, language recording/digitizing servers, and student STEM workstations."
    ],
    applicationProcedure: [
      "Submit application through Cherokee Preservation Foundation portal."
    ],
    officialUrl: "https://cherokeepreservation.org/"
  },
  {
    id: "nc-county-02",
    title: "Robeson County Lumbee Youth STEM & Technology Grants",
    provider: "Robeson County Education Foundation & Lumbee Tribe of NC",
    category: "county",
    level: "County - Robeson (NC)",
    targetAudience: "Lumbee Native Youth & Local Schools",
    aiServerEligible: true,
    maxFunding: "$10,000 - $50,000",
    matchingReq: "None",
    deadline: "Annual Window (Fall)",
    colorCode: "rose",
    summary: "County-level educational foundation grants to equip schools in Robeson County with updated computer labs, coding kits, and AI workstations.",
    eligibility: [
      "Public and charter schools in Robeson County serving high Lumbee Native student populations."
    ],
    allowedCosts: [
      "Computer workstations, AI learning software, and robotics hardware."
    ],
    applicationProcedure: [
      "Submit application to Robeson County Education Foundation."
    ],
    officialUrl: "https://www.robeson.k12.nc.us/"
  },

  // ==========================================
  // OKLAHOMA COUNTY GRANTS
  // ==========================================
  {
    id: "ok-county-01",
    title: "Cherokee & Adair County (OK) Tribal Education Technology Grants",
    provider: "Cherokee Nation Education Department",
    category: "county",
    level: "County - Cherokee/Adair (OK)",
    targetAudience: "Cherokee Nation Reservation Schools & Youth Centers",
    aiServerEligible: true,
    maxFunding: "$20,000 - $100,000",
    matchingReq: "None",
    deadline: "Annual Window (Spring)",
    colorCode: "rose",
    summary: "Tribal government tax and gaming allocations providing computer server nodes, Wi-Fi networks, and STEM hardware to schools in Tahlequah and Cherokee County.",
    eligibility: [
      "Public schools located within Cherokee Nation jurisdictional boundaries in Cherokee and Adair counties."
    ],
    allowedCosts: [
      "AI server workstations, student desktop PCs, and robotics building sets."
    ],
    applicationProcedure: [
      "Submit application via Cherokee Nation Education Portal."
    ],
    officialUrl: "https://www.cherokee.org/"
  },
  {
    id: "ok-county-02",
    title: "Choctaw & McCurtain County (OK) Youth STEM Tech Grants",
    provider: "Choctaw Nation Education Division",
    category: "county",
    level: "County - Choctaw/McCurtain/Bryan (OK)",
    targetAudience: "Choctaw Reservation Schools & Youth Centers",
    aiServerEligible: true,
    maxFunding: "$15,000 - $75,000",
    matchingReq: "None",
    deadline: "Annual Window (Fall)",
    colorCode: "rose",
    summary: "Choctaw Nation grants for local schools in southeastern Oklahoma to acquire computer lab hardware, AI coding software, and STEM lab equipment.",
    eligibility: [
      "School districts within the Choctaw Nation reservation boundaries."
    ],
    allowedCosts: [
      "Desktop AI workstations, server node hardware, and STEM kits."
    ],
    applicationProcedure: [
      "Submit application to Choctaw Nation Education Services."
    ],
    officialUrl: "https://www.choctawnation.com/"
  },

  // ==========================================
  // MONTANA COUNTY GRANTS
  // ==========================================
  {
    id: "mt-county-01",
    title: "Glacier & Lake County (MT) Tribal STEM Infrastructure Grants",
    provider: "Glacier & Lake County Educational Service Alliances",
    category: "county",
    level: "County - Glacier/Lake (MT)",
    targetAudience: "Blackfeet & Flathead (CSKT) Reservation Schools & SKC",
    aiServerEligible: true,
    maxFunding: "$15,000 - $80,000",
    matchingReq: "None",
    deadline: "Annual Window (Fall)",
    colorCode: "rose",
    summary: "County educational alliance grants to equip reservation schools and Salish Kootenai College with updated computer servers and STEM labs.",
    eligibility: [
      "Public and tribal schools in Glacier and Lake counties."
    ],
    allowedCosts: [
      "AI server workstations, student laptops, and STEM laboratory instrumentation."
    ],
    applicationProcedure: [
      "Submit application to Glacier/Lake County Educational Service Office."
    ],
    officialUrl: "https://www.glaciercountymt.org/"
  },

  // ==========================================
  // DAKOTAS COUNTY GRANTS
  // ==========================================
  {
    id: "dak-county-01",
    title: "Oglala Lakota & Todd County (SD) Lakota STEM Infrastructure Grants",
    provider: "Oglala Lakota / Todd County School Districts & Red Cloud Indian School",
    category: "county",
    level: "County - Oglala Lakota / Todd (SD)",
    targetAudience: "Pine Ridge & Rosebud Reservation Schools & TCUs",
    aiServerEligible: true,
    maxFunding: "$15,000 - $80,000",
    matchingReq: "None",
    deadline: "Annual Window (Winter)",
    colorCode: "rose",
    summary: "County tax revenue and foundation grants providing computer server nodes, Wi-Fi networks, and AI workstations for Pine Ridge and Rosebud reservation schools.",
    eligibility: [
      "Schools operating within Oglala Lakota or Todd counties."
    ],
    allowedCosts: [
      "AI workstations, server nodes, and Lakota language digitizing software."
    ],
    applicationProcedure: [
      "Submit proposal form to County School Superintendent."
    ],
    officialUrl: "https://www.olcsd.com/"
  },

  // ==========================================
  // TECH CORPORATE & AI GRANTS (PURPLE TIER)
  // ==========================================
  {
    id: "corp-01",
    title: "NVIDIA Academic Hardware Grant & DLI University Ambassador Program",
    provider: "NVIDIA Corporation",
    category: "corporate",
    level: "National",
    targetAudience: "TCUs, NASNTIs & STEM Educators",
    aiServerEligible: true,
    maxFunding: "Direct Hardware Donation (Value $15,000 - $120,000)",
    matchingReq: "None",
    deadline: "Quarterly Calls for Proposals",
    colorCode: "purple",
    summary: "Donates high-performance NVIDIA RTX/A100/H100 GPUs, workstation servers, and cloud computing credits directly to educators and researchers at Native-serving institutions.",
    eligibility: [
      "Full-time faculty or IT/Research lead at accredited TCUs or STEM non-profits.",
      "Applicant must be registered in the NVIDIA Developer Program.",
      "Commitment to integrate NVIDIA Deep Learning Institute (DLI) curriculum into courses."
    ],
    allowedCosts: [
      "Enterprise NVIDIA GPU server accelerators (e.g. RTX 6000 Ada, A100, L40S).",
      "Free DLI teaching kits, workshop licenses, and GPU cloud computing credits.",
      "Ambassador certification training for Native educators."
    ],
    applicationProcedure: [
      "Join the free NVIDIA Developer Program.",
      "Submit proposal via NVIDIA Hardware Grant Application Portal outlining AI course/research plan.",
      "Specify exact GPU server hardware configuration requested.",
      "Upon award, complete hardware delivery agreement and publish results."
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
      "Tribal 501(c)(3) organizations, TCUs, or Tribally chartered educational entities.",
      "Projects focused on Indigenous language preservation, environmental AI, or STEM education."
    ],
    allowedCosts: [
      "On-premises Azure Stack Edge AI servers and hybrid cloud gateway hardware.",
      "$3,500/year recurring Azure AI credits per institution.",
      "AI model training software licenses and technical support."
    ],
    applicationProcedure: [
      "Verify nonprofit / Tribal eligibility on Microsoft Non-Profit Hub.",
      "Submit project proposal detailing AI use case (e.g., language preservation model or environmental monitoring).",
      "Select required hybrid hardware or cloud grant package."
    ],
    officialUrl: "https://www.microsoft.com/en-us/nonprofits/eligibility"
  },
  {
    id: "corp-03",
    title: "Google.org AI Opportunity Fund & STEM Education Grants",
    provider: "Google.org",
    category: "corporate",
    level: "National",
    targetAudience: "K-12 Tribal Schools & TCUs",
    aiServerEligible: true,
    maxFunding: "$100,000 - $1,000,000",
    matchingReq: "None",
    deadline: "Annual RFP (Spring)",
    colorCode: "purple",
    summary: "Major philanthropic initiative funding AI literacy, hardware grants, and computer science lab infrastructure for Indigenous students and workforce training.",
    eligibility: [
      "Educational institutions, TCUs, and Native-led non-profit organizations."
    ],
    allowedCosts: [
      "AI lab equipment, high-spec student compute nodes, and server racks.",
      "Google AI Pro certifications and educator training stipends.",
      "Community AI literacy program operational funding."
    ],
    applicationProcedure: [
      "Monitor Google.org RFP announcements or apply through partner intermediaries (e.g. Native Americans in Philanthropy).",
      "Submit institutional proposal emphasizing AI workforce readiness for Tribal youth."
    ],
    officialUrl: "https://www.google.org/"
  },

  // ==========================================
  // PHILANTHROPIC GRANTS (EMERALD TIER)
  // ==========================================
  {
    id: "phila-01",
    title: "Alfred P. Sloan Foundation - Indigenous STEM & Compute Infrastructure Initiative",
    provider: "Alfred P. Sloan Foundation",
    category: "philanthropic",
    level: "National",
    targetAudience: "TCUs & Higher Ed Research Labs",
    aiServerEligible: true,
    maxFunding: "$250,000 - $625,000",
    matchingReq: "None",
    deadline: "Annual LOI Window (March)",
    colorCode: "emerald",
    summary: "Premier philanthropic funding stream dedicated to building research infrastructure, data science capabilities, and AI server infrastructure at Tribal Colleges.",
    eligibility: [
      "Tribal Colleges and Universities (TCUs).",
      "Higher education partnerships led by Native American principal investigators."
    ],
    allowedCosts: [
      "Custom AI server rack purchase, installation, and data storage systems.",
      "Graduate student research assistantships in computational STEM fields.",
      "Data sovereignty architecture software and protocol setup."
    ],
    applicationProcedure: [
      "Submit a 3-page Letter of Inquiry (LOI) to the Sloan Indigenous STEM program Director.",
      "If invited, submit a full proposal with institutional budget and hardware specifications.",
      "Board of Trustees review and final award notification."
    ],
    officialUrl: "https://sloan.org/programs/higher-education/indigenous-stem"
  },
  {
    id: "phila-02",
    title: "AISES - Tribal School & College STEM Equipment Grant",
    provider: "American Indian Science and Engineering Society (AISES)",
    category: "philanthropic",
    level: "National",
    targetAudience: "K-12 Tribal Schools & TCUs",
    aiServerEligible: true,
    maxFunding: "$10,000 - $75,000",
    matchingReq: "None",
    deadline: "Annual Window (Fall / Spring)",
    colorCode: "emerald",
    summary: "Provides direct equipment grants for AISES student chapters to acquire computer servers, AI development boards, and STEM robotics lab kits.",
    eligibility: [
      "Active AISES K-12 school chapters or TCU student chapters.",
      "Tribally affiliated educational programs."
    ],
    allowedCosts: [
      "AI server workstations (e.g. dual-GPU desktop nodes).",
      "STEM robotics kits, 3D printers, and sensor hardware.",
      "Travel stipends for students to present research at national AISES conference."
    ],
    applicationProcedure: [
      "Ensure AISES chapter status is active and verified.",
      "Submit online equipment grant application detailing student project goals."
    ],
    officialUrl: "https://www.aises.org/grants"
  }
];
