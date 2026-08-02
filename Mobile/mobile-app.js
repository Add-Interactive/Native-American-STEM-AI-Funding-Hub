/**
 * Dedicated Native Mobile Web App Logic
 * Brand: Add Interactive Studio
 */

document.addEventListener('DOMContentLoaded', () => {
  const mFeedContainer = document.getElementById('mFeedContainer');
  const mSearchInput = document.getElementById('mSearchInput');
  const mStateChips = document.querySelectorAll('.m-state-chip');
  const mNavItems = document.querySelectorAll('.m-nav-item');
  const mAppViews = document.querySelectorAll('.m-app-view');
  
  // Sheet Modal Elements
  const mSheetBackdrop = document.getElementById('mSheetBackdrop');
  const mSheetCloseBtn = document.getElementById('mSheetCloseBtn');
  const mSheetBadge = document.getElementById('mSheetBadge');
  const mSheetTitle = document.getElementById('mSheetTitle');
  const mSheetProvider = document.getElementById('mSheetProvider');
  const mSheetSummary = document.getElementById('mSheetSummary');
  const mSheetEligibility = document.getElementById('mSheetEligibility');
  const mSheetAllowed = document.getElementById('mSheetAllowed');
  const mSheetProcedure = document.getElementById('mSheetProcedure');
  const mSheetAmount = document.getElementById('mSheetAmount');
  const mSheetLink = document.getElementById('mSheetLink');

  let currentSearch = '';
  let currentState = 'all';

  // Search Filter Listener
  if (mSearchInput) {
    mSearchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderMobileFeed();
    });
  }

  // State Chip Filter Listeners
  mStateChips.forEach(chip => {
    chip.addEventListener('click', () => {
      mStateChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentState = chip.getAttribute('data-state');
      renderMobileFeed();
    });
  });

  // Bottom Navigation Bar Listeners
  mNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.getAttribute('data-view');
      mNavItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      mAppViews.forEach(view => {
        if (view.id === `view-${targetView}`) {
          view.style.display = 'block';
        } else {
          view.style.display = 'none';
        }
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Render Mobile Feed Cards
  function renderMobileFeed() {
    if (typeof FUNDING_DATA === 'undefined') return;

    const filtered = FUNDING_DATA.filter(grant => {
      if (currentState !== 'all' && grant.level !== currentState && grant.level !== 'National') return false;

      if (currentSearch) {
        const fullText = (grant.title + ' ' + grant.provider + ' ' + grant.summary + ' ' + grant.level).toLowerCase();
        if (!fullText.includes(currentSearch)) return false;
      }
      return true;
    });

    mFeedContainer.innerHTML = '';

    if (filtered.length === 0) {
      mFeedContainer.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <div style="font-size:2.5rem; margin-bottom:0.5rem;">🔍</div>
          <p>No grants found for this filter.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(grant => {
      const card = document.createElement('div');
      card.className = `m-grant-card ${grant.colorCode}`;

      card.innerHTML = `
        <div class="m-card-top">
          <span class="m-badge ${grant.colorCode}">${grant.category}</span>
          <span class="m-amount">${grant.maxFunding}</span>
        </div>
        <div class="m-grant-title">${grant.title}</div>
        <div class="m-grant-provider">${grant.provider} • ${grant.level}</div>
        <div class="m-grant-summary">${grant.summary}</div>
        <button class="m-tap-btn m-open-sheet-btn" data-id="${grant.id}">View Qualifications & Apply ↗</button>
      `;

      mFeedContainer.appendChild(card);
    });

    // Attach Sheet Modal Listeners
    document.querySelectorAll('.m-open-sheet-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openSheetModal(id);
      });
    });
  }

  // Open Bottom Sheet Modal
  function openSheetModal(grantId) {
    const grant = FUNDING_DATA.find(g => g.id === grantId);
    if (!grant) return;

    mSheetBadge.className = `m-badge ${grant.colorCode}`;
    mSheetBadge.textContent = grant.category.toUpperCase();
    mSheetTitle.textContent = grant.title;
    mSheetProvider.textContent = grant.provider + ' • ' + grant.level;
    mSheetSummary.textContent = grant.summary;
    mSheetAmount.textContent = grant.maxFunding;
    mSheetLink.href = grant.officialUrl;

    mSheetEligibility.innerHTML = grant.eligibility.map(i => `<li>${i}</li>`).join('');
    mSheetAllowed.innerHTML = grant.allowedCosts.map(i => `<li>${i}</li>`).join('');
    mSheetProcedure.innerHTML = grant.applicationProcedure.map(s => `<li>${s}</li>`).join('');

    mSheetBackdrop.classList.add('active');
  }

  if (mSheetCloseBtn) {
    mSheetCloseBtn.addEventListener('click', () => {
      mSheetBackdrop.classList.remove('active');
    });
  }

  if (mSheetBackdrop) {
    mSheetBackdrop.addEventListener('click', (e) => {
      if (e.target === mSheetBackdrop) {
        mSheetBackdrop.classList.remove('active');
      }
    });
  }

  // Initial Run
  renderMobileFeed();
});
