/**
 * Native American STEM & AI Funding Dashboard Logic
 * Brand: Add Interactive Studio
 */

document.addEventListener('DOMContentLoaded', () => {
  // STARTUP MODE SELECTION MODAL LOGIC
  const startupModal = document.getElementById('startupModal');
  const btnLaunchMobile = document.getElementById('btnLaunchMobile');
  const btnLaunchDesktop = document.getElementById('btnLaunchDesktop');
  const rememberChoiceCheckbox = document.getElementById('rememberChoiceCheckbox');

  const urlParams = new URLSearchParams(window.location.search);
  const modeParam = urlParams.get('mode');
  const savedPref = localStorage.getItem('add_studio_mode_pref');

  // Automatically redirect if saved preference exists or URL parameter passed
  if (modeParam === 'mobile' || (!modeParam && savedPref === 'mobile' && window.innerWidth <= 850)) {
    window.location.href = 'Mobile/index.html';
    return;
  }

  // Show Startup Selection Modal if no explicit desktop param and first visit on small screen
  if (!modeParam && !savedPref && window.innerWidth <= 850 && startupModal) {
    startupModal.classList.add('active');
  }

  if (btnLaunchMobile) {
    btnLaunchMobile.addEventListener('click', () => {
      if (rememberChoiceCheckbox && rememberChoiceCheckbox.checked) {
        localStorage.setItem('add_studio_mode_pref', 'mobile');
      }
      window.location.href = 'Mobile/index.html';
    });
  }

  if (btnLaunchDesktop) {
    btnLaunchDesktop.addEventListener('click', () => {
      if (rememberChoiceCheckbox && rememberChoiceCheckbox.checked) {
        localStorage.setItem('add_studio_mode_pref', 'desktop');
      }
      if (startupModal) startupModal.classList.remove('active');
    });
  }

  // DOM Elements
  const grantsGrid = document.getElementById('grantsGrid');
  const searchInput = document.getElementById('searchInput');
  const levelSelect = document.getElementById('levelSelect');
  const audienceSelect = document.getElementById('audienceSelect');
  const aiServerOnlyToggle = document.getElementById('aiServerOnlyToggle');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const pillBtns = document.querySelectorAll('.pill-btn');
  const totalGrantsCount = document.getElementById('totalGrantsCount');
  const aiEligibleCount = document.getElementById('aiEligibleCount');
  
  // Theme Toggle
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  
  // View Tabs
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Modal Elements
  const grantModal = document.getElementById('grantModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalProvider = document.getElementById('modalProvider');
  const modalSummary = document.getElementById('modalSummary');
  const modalEligibility = document.getElementById('modalEligibility');
  const modalAllowedCosts = document.getElementById('modalAllowedCosts');
  const modalProcedure = document.getElementById('modalProcedure');
  const modalMaxFunding = document.getElementById('modalMaxFunding');
  const modalOfficialLink = document.getElementById('modalOfficialLink');

  // Calculator Elements
  const gpuSelect = document.getElementById('gpuSelect');
  const storageSelect = document.getElementById('storageSelect');
  const networkSelect = document.getElementById('networkSelect');
  const powerSelect = document.getElementById('powerSelect');
  const calcGpuCost = document.getElementById('calcGpuCost');
  const calcStorageCost = document.getElementById('calcStorageCost');
  const calcNetworkCost = document.getElementById('calcNetworkCost');
  const calcPowerCost = document.getElementById('calcPowerCost');
  const calcTotalCost = document.getElementById('calcTotalCost');
  const calcRecommendedGrants = document.getElementById('calcRecommendedGrants');

  // Mobile Controls
  const sidebarDrawer = document.getElementById('sidebarDrawer');
  const mobileFilterToggleBtn = document.getElementById('mobileFilterToggleBtn');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');
  const activeFilterBadge = document.getElementById('activeFilterBadge');
  
  const btnModeCard = document.getElementById('btnModeCard');
  const btnModeCompact = document.getElementById('btnModeCompact');
  const dBtnCard = document.getElementById('dBtnCard');
  const dBtnCompact = document.getElementById('dBtnCompact');
  
  const quickChips = document.querySelectorAll('.quick-chip');
  const resultsCountText = document.getElementById('resultsCountText');
  const prevPageBtn = document.getElementById('prevPageBtn');
  const nextPageBtn = document.getElementById('nextPageBtn');
  const pageInfoText = document.getElementById('pageInfoText');

  // State Variables
  let currentCategory = 'all';
  let currentSearch = '';
  let currentLevel = 'all';
  let currentAudience = 'all';
  let currentAiOnly = false;
  
  let viewMode = 'card';
  let currentPage = 1;
  const ITEMS_PER_PAGE = 8;

  // Initialize Metrics
  if (typeof FUNDING_DATA !== 'undefined') {
    totalGrantsCount.textContent = FUNDING_DATA.length + '+';
    const aiCount = FUNDING_DATA.filter(g => g.aiServerEligible).length;
    aiEligibleCount.textContent = aiCount;
  }

  // Mobile Drawer Toggle Event Listeners
  if (mobileFilterToggleBtn) {
    mobileFilterToggleBtn.addEventListener('click', () => {
      sidebarDrawer.classList.add('mobile-open');
    });
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
      sidebarDrawer.classList.remove('mobile-open');
    });
  }

  // View Mode Switcher
  function setViewMode(mode) {
    viewMode = mode;
    if (mode === 'compact') {
      grantsGrid.classList.remove('mode-card');
      grantsGrid.classList.add('mode-compact');
      if (btnModeCard) btnModeCard.classList.remove('active');
      if (btnModeCompact) btnModeCompact.classList.add('active');
      if (dBtnCard) dBtnCard.classList.remove('active');
      if (dBtnCompact) dBtnCompact.classList.add('active');
    } else {
      grantsGrid.classList.remove('mode-compact');
      grantsGrid.classList.add('mode-card');
      if (btnModeCompact) btnModeCompact.classList.remove('active');
      if (btnModeCard) btnModeCard.classList.add('active');
      if (dBtnCompact) dBtnCompact.classList.remove('active');
      if (dBtnCard) dBtnCard.classList.add('active');
    }
    renderGrants();
  }

  if (btnModeCard) btnModeCard.addEventListener('click', () => setViewMode('card'));
  if (btnModeCompact) btnModeCompact.addEventListener('click', () => setViewMode('compact'));
  if (dBtnCard) dBtnCard.addEventListener('click', () => setViewMode('card'));
  if (dBtnCompact) dBtnCompact.addEventListener('click', () => setViewMode('compact'));

  // Quick State Bar Chips
  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      quickChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const stateVal = chip.getAttribute('data-state');
      levelSelect.value = stateVal;
      currentLevel = stateVal;
      currentPage = 1;
      renderGrants();
    });
  });

  // Pagination Listeners
  prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderGrants();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  });

  nextPageBtn.addEventListener('click', () => {
    currentPage++;
    renderGrants();
    window.scrollTo({ top: 300, behavior: 'smooth' });
  });

  // Filter Event Listeners
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    currentPage = 1;
    renderGrants();
  });

  levelSelect.addEventListener('change', (e) => {
    currentLevel = e.target.value;
    quickChips.forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-state') === currentLevel);
    });
    currentPage = 1;
    renderGrants();
  });

  audienceSelect.addEventListener('change', (e) => {
    currentAudience = e.target.value;
    currentPage = 1;
    renderGrants();
  });

  aiServerOnlyToggle.addEventListener('change', (e) => {
    currentAiOnly = e.target.checked;
    currentPage = 1;
    renderGrants();
  });

  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      currentPage = 1;
      renderGrants();
    });
  });

  resetFiltersBtn.addEventListener('click', () => {
    currentCategory = 'all';
    currentSearch = '';
    currentLevel = 'all';
    currentAudience = 'all';
    currentAiOnly = false;
    currentPage = 1;

    searchInput.value = '';
    levelSelect.value = 'all';
    audienceSelect.value = 'all';
    aiServerOnlyToggle.checked = false;

    pillBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.pill-btn.all').classList.add('active');

    quickChips.forEach(c => c.classList.remove('active'));
    document.querySelector('.quick-chip[data-state="all"]').classList.add('active');

    renderGrants();
    if (sidebarDrawer) sidebarDrawer.classList.remove('mobile-open');
  });

  // Render Grant Cards or Compact Rows
  function renderGrants() {
    if (typeof FUNDING_DATA === 'undefined') return;

    const filtered = FUNDING_DATA.filter(grant => {
      if (currentCategory !== 'all' && grant.category !== currentCategory) return false;

      if (currentLevel !== 'all') {
        if (currentLevel === 'county' && grant.category !== 'county') return false;
        if (currentLevel !== 'county' && grant.level !== currentLevel && grant.level !== 'National') return false;
      }

      if (currentAudience !== 'all') {
        const audLower = grant.targetAudience.toLowerCase();
        if (currentAudience === 'K-12' && !audLower.includes('k-12') && !audLower.includes('school')) return false;
        if (currentAudience === 'TCUs' && !audLower.includes('tcu') && !audLower.includes('tribal college')) return false;
        if (currentAudience === 'NASNTIs' && !audLower.includes('nasnti') && !audLower.includes('higher ed')) return false;
      }

      if (currentAiOnly && !grant.aiServerEligible) return false;

      if (currentSearch) {
        const fullText = (grant.title + ' ' + grant.provider + ' ' + grant.summary + ' ' + grant.level + ' ' + grant.targetAudience + ' ' + grant.allowedCosts.join(' ')).toLowerCase();
        if (!fullText.includes(currentSearch)) return false;
      }

      return true;
    });

    if (activeFilterBadge) {
      if (currentCategory !== 'all') {
        activeFilterBadge.textContent = currentCategory.toUpperCase();
      } else if (currentLevel !== 'all') {
        activeFilterBadge.textContent = currentLevel.replace('State - ', '');
      } else {
        activeFilterBadge.textContent = 'All (' + filtered.length + ')';
      }
    }

    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
    const paginatedItems = filtered.slice(startIndex, endIndex);

    if (resultsCountText) {
      resultsCountText.textContent = totalItems > 0 
        ? `Showing ${startIndex + 1}–${endIndex} of ${totalItems} grants`
        : '0 grants found';
    }

    pageInfoText.textContent = `Page ${currentPage} of ${totalPages}`;
    prevPageBtn.disabled = (currentPage === 1);
    nextPageBtn.disabled = (currentPage === totalPages || totalPages === 0);

    grantsGrid.innerHTML = '';

    if (totalItems === 0) {
      grantsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3>No matching funding opportunities found</h3>
          <p style="margin-top: 0.5rem;">Try resetting your search query or state filter.</p>
        </div>
      `;
      return;
    }

    paginatedItems.forEach(grant => {
      if (viewMode === 'compact') {
        const row = document.createElement('div');
        row.className = `compact-row ${grant.colorCode} view-details-btn`;
        row.setAttribute('data-id', grant.id);

        row.innerHTML = `
          <div class="compact-info">
            <div class="compact-title">${grant.title}</div>
            <div class="compact-sub">
              <span>📍 ${grant.level}</span> • 
              <span>🎓 ${grant.targetAudience}</span>
              ${grant.aiServerEligible ? '• <span style="color:#d8b4fe; font-weight:700;">🖥️ AI GPU</span>' : ''}
            </div>
          </div>
          <div class="compact-amount">${grant.maxFunding}</div>
        `;
        grantsGrid.appendChild(row);
      } else {
        const card = document.createElement('div');
        card.className = `grant-card ${grant.colorCode}`;
        
        const aiTagHtml = grant.aiServerEligible 
          ? `<span class="ai-badge">🖥️ AI Server Eligible</span>` 
          : '';

        card.innerHTML = `
          <div>
            <div class="card-top">
              <span class="badge ${grant.colorCode}">${grant.category}</span>
              ${aiTagHtml}
            </div>
            <h3 class="grant-title">${grant.title}</h3>
            <div class="grant-provider">${grant.provider}</div>
            <p class="grant-summary">${grant.summary}</p>
          </div>

          <div>
            <div class="card-meta">
              <div class="meta-item"><span class="key">Scope:</span> <span class="val">${grant.level}</span></div>
              <div class="meta-item"><span class="key">Audience:</span> <span class="val">${grant.targetAudience}</span></div>
              <div class="meta-item"><span class="key">Funding Ceiling:</span> <span class="val" style="color: var(--emerald-primary);">${grant.maxFunding}</span></div>
            </div>
            <div class="card-actions">
              <button class="action-btn primary view-details-btn" data-id="${grant.id}">Application Procedures</button>
              <a href="${grant.officialUrl}" target="_blank" class="action-btn secondary" style="text-decoration:none;">Grant Site ↗</a>
            </div>
          </div>
        `;
        grantsGrid.appendChild(card);
      }
    });

    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openModal(id);
      });
    });
  }

  function openModal(grantId) {
    const grant = FUNDING_DATA.find(g => g.id === grantId);
    if (!grant) return;

    modalBadge.className = `badge ${grant.colorCode}`;
    modalBadge.textContent = grant.category.toUpperCase();
    modalTitle.textContent = grant.title;
    modalProvider.textContent = grant.provider + ' • ' + grant.level;
    modalSummary.textContent = grant.summary;
    modalMaxFunding.textContent = grant.maxFunding;
    modalOfficialLink.href = grant.officialUrl;

    modalEligibility.innerHTML = grant.eligibility.map(item => `<li>${item}</li>`).join('');
    modalAllowedCosts.innerHTML = grant.allowedCosts.map(item => `<li>${item}</li>`).join('');
    modalProcedure.innerHTML = grant.applicationProcedure.map(step => `<li>${step}</li>`).join('');

    grantModal.classList.add('active');
  }

  modalCloseBtn.addEventListener('click', () => {
    grantModal.classList.remove('active');
  });

  grantModal.addEventListener('click', (e) => {
    if (e.target === grantModal) {
      grantModal.classList.remove('active');
    }
  });

  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      const tabTarget = link.getAttribute('data-tab');
      tabLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      tabContents.forEach(content => {
        if (content.id === `tab-${tabTarget}`) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeIcon.textContent = '🌙';
      themeLabel.textContent = 'Dark Mode';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '☀️';
      themeLabel.textContent = 'Light Mode';
    }
  });

  const gpuPrices = { entry: 22000, mid: 48000, high: 140000, k12: 12000 };
  const storagePrices = { nvme16: 3500, nvme64: 9500, san: 24000 };
  const networkPrices = { "10g": 2500, "100g": 8500 };
  const powerPrices = { basic: 4000, adv: 14000 };

  function updateCalculator() {
    const gVal = gpuPrices[gpuSelect.value] || 22000;
    const sVal = storagePrices[storageSelect.value] || 3500;
    const nVal = networkPrices[networkSelect.value] || 2500;
    const pVal = powerPrices[powerSelect.value] || 4000;
    const total = gVal + sVal + nVal + pVal;

    calcGpuCost.textContent = '$' + gVal.toLocaleString();
    calcStorageCost.textContent = '$' + sVal.toLocaleString();
    calcNetworkCost.textContent = '$' + nVal.toLocaleString();
    calcPowerCost.textContent = '$' + pVal.toLocaleString();
    calcTotalCost.textContent = '$' + total.toLocaleString();

    let matches = [];
    if (total <= 50000) {
      matches = [
        "NVIDIA Academic Hardware Grant (100% Direct Hardware Donation)",
        "AISES Tribal School & College Equipment Grant (Up to $75,000)",
        "BIE Education Technology Infrastructure Grants (Up to $150,000)",
        "Microsoft Tech for Social Impact AI Grant ($50,000)"
      ];
    } else if (total <= 300000) {
      matches = [
        "NSF TCUP TSIP Infusion Grants (Up to $500,000)",
        "Alfred P. Sloan Foundation Indigenous STEM Grant ($250,000 - $625,000)",
        "USDA NIFA Tribal Colleges Research Grant ($200,000 - $650,000)",
        "Dept. of Education NASNTI Title III Part F Grants ($450,000/yr)"
      ];
    } else {
      matches = [
        "Dept. of Education Research and Development Infrastructure (RDI) Grant ($3M - $5M)",
        "NSF TCUP Cyberinfrastructure CHAI Strand ($500,000 - $1.5M)",
        "NM Tribal Infrastructure Fund / Capital Outlay Grants ($500,000 - $3M)",
        "DOE Office of Indian Energy Tech Infrastructure Grant ($2M)"
      ];
    }

    calcRecommendedGrants.innerHTML = matches.map(m => `
      <div style="background: rgba(6, 182, 212, 0.1); border: 1px solid var(--cyan-primary); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--text-primary); font-weight: 600;">
        ✔️ ${m}
      </div>
    `).join('');
  }

  [gpuSelect, storageSelect, networkSelect, powerSelect].forEach(elem => {
    elem.addEventListener('change', updateCalculator);
  });

  renderGrants();
  updateCalculator();
});
