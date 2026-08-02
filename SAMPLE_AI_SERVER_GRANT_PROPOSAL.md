# Sample Grant Proposal Narrative: On-Campus AI Compute Infrastructure

**Project Title**: Sovereign AI Infrastructure & High-Performance STEM Learning Node at [Institution Name]  
**Target Grant Program**: National Science Foundation (NSF) TCUP CHAI Strand / U.S. Department of Education RDI  
**Funding Requested**: $485,000 (Hardware + Infrastructure + Curriculum Integration)  
**Project Duration**: 3 Years  

---

## 1. Project Summary & Institutional Context

[Institution Name] is a accredited 1994 Land-Grant Tribal College located on the reservation of the [Tribal Nation Name], serving an undergraduate population that is over 85% Native American. The mission of [Institution Name] is to empower Native students through culturally grounded education, technical excellence, and community leadership.

While artificial intelligence (AI) and machine learning (ML) are rapidly reshaping global research and workforce demands, rural tribal institutions face a severe "digital compute gap." Reliance on external, subscription-based cloud services presents significant financial hurdles for tribal budgets and compromises **Indigenous Data Sovereignty**—exposing sensitive tribal natural resource data and native language archives to third-party commercial cloud harvesting.

To address these challenges, this project will acquire, install, and operate a state-of-the-art **On-Campus AI Server Node** featuring 4x NVIDIA L40S enterprise GPUs, 512GB ECC RAM, 64TB NVMe high-speed storage, and a 100GbE campus interconnect. This local server node will serve as the backbone for:
1. Adding an **Associate/Bachelor of Science track in Applied Artificial Intelligence & Data Science**.
2. Supporting faculty research in tribal natural resource monitoring, satellite GIS processing, and native language audio synthesis.
3. Establishing an **air-gapped sovereign data repository** protecting tribal intellectual property.

---

## 2. Project Plan & Technical Implementation

### A. Hardware Procurement & Campus Deployment (Months 1–6)
During the initial 6 months, the project team will execute vendor procurement for an enterprise 4U GPU Server Node, rack enclosure, 6kVA online UPS battery backup, and dedicated server room cooling. 

```
[4x NVIDIA L40S GPUs (192GB VRAM)] <---> [PCIe Gen5 Bus / Dual EPYC CPUs]
                                          |
                                          +---> [64TB NVMe RAID Array]
                                          |
                                          +---> [100GbE Campus Switch] <---> [Classroom AI Labs]
```

### B. Curriculum & Student Research Integration (Months 7–24)
The computing node will directly serve 150+ Native students annually across 4 core courses:
* **CS 120**: Introduction to Python & AI Concepts
* **CS 240**: Applied Machine Learning & Deep Neural Networks
* **GIS 310**: Remote Sensing & Environmental AI Modeling
* **LING 205**: Digital Humanities & Indigenous Language AI Archiving

### C. Indigenous Data Governance Protocol (Months 1–36)
All server hardware will operate under a strict **Tribal Data Sovereignty Protocol** drafted in consultation with the Tribal Historic Preservation Office (THPO). Local AI inference models (such as Llama 3 and Whisper) will run locally on-campus without sending telemetry or data back to third-party APIs.

---

## 3. Performance Metrics & Expected Outcomes

| Objective | Year 1 Target | Year 2 Target | Year 3 Target |
| :--- | :--- | :--- | :--- |
| **Native Students Enrolled in AI Courses** | 40 Students | 75 Students | 120 Students |
| **Undergraduate Research Projects Completed** | 4 Projects | 10 Projects | 18 Projects |
| **Faculty AI Curriculum Certification** | 3 Faculty | 6 Faculty | 10 Faculty |
| **Native Language Hours Processed Locally** | 200 Hours | 600 Hours | 1,500 Hours |

---

## 4. Itemized Budget Justification

```
1. EQUIPMENT & HARDWARE:
   - 4U Enterprise GPU Server (4x NVIDIA L40S 48GB, Dual AMD EPYC 64-Core): $48,000
   - 64TB NVMe Enterprise Storage SAN: $9,500
   - 100GbE Managed Switch & Fiber Interconnects: $8,500
   - 42U Server Rack + 6kVA UPS + Dedicated Air Conditioning Unit: $14,000
   Subtotal Equipment: $80,000

2. PERSONNEL & STIPENDS:
   - Faculty Project Director (PI) - 20% Academic Year Effort: $42,000/yr ($126,000 total)
   - Systems Administrator / IT Specialist - 25% Effort: $30,000/yr ($90,000 total)
   - 6 Undergraduate Native Student Research Stipends ($15/hr x 10 hrs/wk): $32,400/yr ($97,200 total)
   Subtotal Personnel: $313,200

3. TRAINING & TRAVEL:
   - NVIDIA Deep Learning Institute (DLI) Educator Training: $6,000
   - Student & Faculty Travel to AISES National Conference: $12,000
   Subtotal Travel: $18,000

4. INDIRECT COSTS (F&A Rate 15%): $73,800

TOTAL PROJECT COST: $485,000
```
