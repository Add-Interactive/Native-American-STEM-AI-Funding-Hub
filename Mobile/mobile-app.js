/**
 * Dedicated Native Mobile Web App Logic
 * Brand: Add Interactive Studio
 * Features: In-Profile Search & Profile Navigator
 */

document.addEventListener('DOMContentLoaded', () => {
  const mFeedContainer = document.getElementById('mFeedContainer');
  const mSearchInput = document.getElementById('mSearchInput');
  const mInProfileSearchInput = document.getElementById('mInProfileSearchInput');
  
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

  // In-Profile Navigator Controls
  const mPrevProfileBtn = document.getElementById('mPrevProfileBtn');
  const mNextProfileBtn = document.getElementById('mNextProfileBtn');
  const mProfileNavInfo = document.getElementById('mProfileNavInfo');

  let currentSearch = '';
  let currentState = 'all';
  
  let currentFilteredGrants = [];
  let currentProfileIndex = 0;

  // Sync Search Inputs (Main Search & In-Profile Search)
  function handleSearchUpdate(newSearchVal) {
    currentSearch = newSearchVal.toLowerCase().trim();
    if (mSearchInput && mSearchInput.value !== newSearchVal) mSearchInput.value = newSearchVal;
    if (mInProfileSearchInput && mInProfileSearchInput.value !== newSearchVal) mInProfileSearchInput.value = newSearchVal;
    
    renderMobileFeed();

    // If modal sheet is active, update profile view to first match
    if (mSheetBackdrop.classList.contains('active')) {
      if (currentFilteredGrants.length > 0) {
        currentProfileIndex = 0;
        loadProfileData(currentFilteredGrants[0]);
      } else {
        mSheetTitle.textContent = "No matching grants found";
        mSheetProvider.textContent = "Try a different search term";
        mSheetSummary.textContent = "";
        mSheetEligibility.innerHTML = "";
        mSheetAllowed.innerHTML = "";
        mSheetProcedure.innerHTML = "";
        mProfileNavInfo.textContent = "0 of 0";
      }
    }
  }

  if (mSearchInput) {
    mSearchInput.addEventListener('input', (e) => handleSearchUpdate(e.target.value));
  }

  if (mInProfileSearchInput) {
    mInProfileSearchInput.addEventListener('input', (e) => handleSearchUpdate(e.target.value));
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

    currentFilteredGrants = FUNDING_DATA.filter(grant => {
      if (currentState !== 'all' && grant.level !== currentState && grant.level !== 'National') return false;

      if (currentSearch) {
        const fullText = (grant.title + ' ' + grant.provider + ' ' + grant.summary + ' ' + grant.level).toLowerCase();
        if (!fullText.includes(currentSearch)) return false;
      }
      return true;
    });

    mFeedContainer.innerHTML = '';

    if (currentFilteredGrants.length === 0) {
      mFeedContainer.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <div style="font-size:2.5rem; margin-bottom:0.5rem;">🔍</div>
          <p>No grants found matching "${currentSearch}".</p>
        </div>
      `;
      return;
    }

    currentFilteredGrants.forEach((grant, index) => {
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
        <button class="m-tap-btn m-open-sheet-btn" data-index="${index}">View Qualifications & Apply ↗</button>
      `;

      mFeedContainer.appendChild(card);
    });

    // Attach Sheet Modal Listeners
    document.querySelectorAll('.m-open-sheet-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        openSheetModal(index);
      });
    });
  }

  // Open Bottom Sheet Modal Profile View
  function openSheetModal(index) {
    if (index < 0 || index >= currentFilteredGrants.length) return;
    currentProfileIndex = index;
    loadProfileData(currentFilteredGrants[currentProfileIndex]);
    mSheetBackdrop.classList.add('active');
  }

  // Load Profile Content into Modal Sheet
  function loadProfileData(grant) {
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

    // Update Profile Navigator Status
    if (mProfileNavInfo) {
      mProfileNavInfo.textContent = `${currentProfileIndex + 1} of ${currentFilteredGrants.length}`;
    }
    if (mPrevProfileBtn) mPrevProfileBtn.disabled = (currentProfileIndex === 0);
    if (mNextProfileBtn) mNextProfileBtn.disabled = (currentProfileIndex === currentFilteredGrants.length - 1);
  }

  // Profile Navigator Next / Prev Listeners
  if (mPrevProfileBtn) {
    mPrevProfileBtn.addEventListener('click', () => {
      if (currentProfileIndex > 0) {
        currentProfileIndex--;
        loadProfileData(currentFilteredGrants[currentProfileIndex]);
      }
    });
  }

  if (mNextProfileBtn) {
    mNextProfileBtn.addEventListener('click', () => {
      if (currentProfileIndex < currentFilteredGrants.length - 1) {
        currentProfileIndex++;
        loadProfileData(currentFilteredGrants[currentProfileIndex]);
      }
    });
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
