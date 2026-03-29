// ============================================
// APP SETTINGS (Tetapan — display/UI prefs)
// ============================================

const DEFAULT_APP_SETTINGS = {
  showBlockedCells: false,
  showCellBorders: true,
  cellSize: 'normal',   // 'small' | 'normal' | 'large'
  reduceAnimations: false,
  highContrast: false,
  largeClueText: false,
  language: 'en',       // 'en' | 'bm'
};

const CELL_SIZES = {
  small:  { cellSize: 32, cellFontSize: 16, numberFontSize: 8  },
  normal: { cellSize: 40, cellFontSize: 20, numberFontSize: 10 },
  large:  { cellSize: 50, cellFontSize: 24, numberFontSize: 12 },
};

const STRINGS = {
  en: {
    paused:           'paused',
    attempts:         'attempts',
    checkEmpty:       (score, correct, wrong) => `Some boxes are still empty. Current score: ${score} / 100 pts (${correct} correct, ${wrong} wrong/empty)`,
    checkAllCorrect:  (score) => `✅ Well done! All answers correct! Score: ${score} / 100 pts`,
    checkSomeWrong:   (score, correct, wrong) => `❌ Some answers are wrong. Score: ${score} / 100 pts (${correct} correct, ${wrong} wrong)`,
    uncheckedWarning: (n) => `${n} crossword(s) not yet checked. Unchecked puzzles will be scored 0. Continue?`,
    uncheckedTitle:   'Warning — Unchecked Crosswords',
    uncheckedYes:     'Yes, Submit',
    finalWin:         '🏆 Congratulations! You Win!',
    finalLose:        '❌ Game Over. Try again!',
    finalTotal:       (score) => `Total Score: ${score} / 600`,
    finalHeaderPuzzle:'Crossword',
    finalHeaderRight: '✅ Correct',
    finalHeaderWrong: '❌ Wrong',
    finalHeaderScore: 'Score',
    finalNote:        'Unchecked crosswords are scored 0.',
    rerollTitle:      (count, max) => `Randomize Hints (${count} / ${max} left)`,
    rerollNone:        'No randomize attempts left',
    resetNone:         'No reset attempts left',
    noRecords:         'No records yet. Complete a game to save your score!',
    timeUp:            "Time's up! Please submit all your answers.",
    timeUpAlt:         "Time's up. This will affect your final results. Please submit all answers from the selection screen.",
    saveBeforeQuit:    'Save your game progress before quitting? (Lives, time, and answers will be saved)',
    deleteSave:        'Are you sure you want to delete the saved game? Saved progress will be lost.',
    clearScoreboard:   'Are you sure you want to clear all scoreboard records? This cannot be undone.',
    newGameOverSave:   'Starting a new game will delete the current save. Continue?',
    clearScoreTitle:   'Clear All Records',
    deleteSaveTitle:   'Delete Save',
    newGameTitle:      'New Game',
    resetSettingsTitle:'Reset Settings?',
    resetSettingsBody: 'Reset all settings to default values?',
    modifierRestoreTitle: 'Reset to Default?',
    modifierRestoreBody: 'This will reset all game settings to default. Any unsaved changes will be lost.',
    modifierCancelBody:  "Quickplay uses Version 1 as default. Saving any changes through this button will apply them in Quickplay.",
    tetapanRestoreTitle: 'Restore Defaults?',
    tetapanRestoreSaved: 'You have previously saved changes. Restore all settings to default?',
    tetapanRestoreYes:   'Yes, Restore',
    // Tetapan labels
    tetapanSubtitle:   'Configure display and app preferences',
    tetDisplayHeader:  'Display',
    tetAccessHeader:   'Accessibility',
    tetLangHeader:     'Language / Bahasa',
    tetLblBlocked:     'Show black boxes',
    tetDescBlocked:    'Show black boxes in the grid. Turn off for a cleaner look.',
    tetLblBorders:     'Show cell borders',
    tetDescBorders:    'Show borders on typeable cells.',
    tetLblCellSize:    'Cell size:',
    tetLblReduceAnim:  'Reduce animations',
    tetLblHighContrast:'High contrast',
    tetLblLargeClue:   'Large clue text',
    resetAllDataLabel: 'Reset all data',
    // Modifier settings
    modifierTitle:     'Game Settings',
    modifierSubtitle:  'Configure your game preferences',
    modLblGameMode:    'Game Mode',
    modDescGameMode:   'Select game mode:',
    modLblTimer:       'Timer',
    modDescTimer:      'Select Duration:',
    modLblHints:       'Hints',
    modDescHints:      'Select hint mode:',
    // Launcher
    launcherSelectTitle: 'Select Difficulty',
    switchCrosswordLabel:'Switch Crossword:',
    cluesHeader:         'Clues',
    // Modals
    homeConfirmTitle:    'Go Home?',
    modifierCancelTitle: 'Going Back',
    gameMenuTitle:       'Game Menu',
    abortConfirmMsg:     'You are about to quit and return to the Main Menu. All progress will be lost.',
    abortConfirmQ:       'Are you sure?',
    homeSaveBtnLabel:    'Save & Quit',
    homeNoSaveBtnLabel:  'Quit Without Saving',
    notCheckedTitle:   'Not Checked Yet',
    notCheckedBody:    "You haven't checked any crossword yet. Please check at least one before submitting.",
    yesDelete:         'Yes, Delete',
    yesDeleteAll:      'Yes, Delete All',
    yesDeleteContinue: 'Yes, Delete & Continue',
    win:               '✅ Win',
    lose:              '❌ Lose',
    lives:             'Lives',
    version:           (v) => `Version ${v}`,
    tetapanSaveMsg:    'There are changes made. Continue?',
    tetapanCancelMsg:  'Backing out with unsaved changes. Save or not?',
  },
  bm: {
    paused:           'dijeda',
    attempts:         'percubaan',
    checkEmpty:       (score, correct, wrong) => `Masih ada kotak yang kosong. Skor semasa: ${score} / 100 mata (${correct} perkataan betul, ${wrong} salah/kosong)`,
    checkAllCorrect:  (score) => `✅ Tahniah! Semua jawapan betul! Skor: ${score} / 100 mata`,
    checkSomeWrong:   (score, correct, wrong) => `❌ Masih ada jawapan yang salah. Skor: ${score} / 100 mata (${correct} betul, ${wrong} salah)`,
    uncheckedWarning: (n) => `${n} teka silang kata belum disemak. Teka silang kata yang tidak disemak akan dikira sebagai 0 mata. Teruskan?`,
    uncheckedTitle:   'Amaran — Teka Silang Kata Belum Disemak',
    uncheckedYes:     'Ya, Hantar',
    finalWin:         '🏆 Tahniah! Anda Berjaya!',
    finalLose:        '❌ Tamat Permainan. Cuba lagi!',
    finalTotal:       (score) => `Jumlah Skor: ${score} / 600`,
    finalHeaderPuzzle:'Teka Silang Kata',
    finalHeaderRight: '✅ Betul',
    finalHeaderWrong: '❌ Salah',
    finalHeaderScore: 'Skor',
    finalNote:        'Teka silang kata yang tidak disemak dikira sebagai 0 mata.',
    rerollTitle:      (count, max) => `Rawak Semula (${count} / ${max} tinggal)`,
    rerollNone:        'Tiada percubaan rawak yang tinggal',
    resetNone:         'Tiada percubaan reset yang tinggal',
    noRecords:         'Tiada rekod lagi. Tamatkan permainan untuk menyimpan skor!',
    timeUp:            'Masa telah tamat! Sila hantar semua jawapan anda.',
    timeUpAlt:         'Masa telah tamat. Ini akan mempengaruhi keputusan akhir anda. Sila hantar semua jawapan di skrin pemilihan.',
    saveBeforeQuit:    'Adakah anda ingin menyimpan progres permainan sebelum keluar? (Nyawa, masa, dan jawapan akan disimpan)',
    deleteSave:        'Adakah anda pasti ingin memadam simpanan permainan? Progres yang disimpan akan hilang.',
    clearScoreboard:   'Adakah anda pasti ingin memadam semua rekod papan skor? Tindakan ini tidak boleh dibatalkan.',
    newGameOverSave:   'Memulakan permainan baru akan memadam simpanan semasa. Teruskan?',
    clearScoreTitle:   'Padam Semua Rekod',
    deleteSaveTitle:   'Padam Simpanan',
    newGameTitle:      'Permainan Baru',
    resetSettingsTitle:'Tetapkan Semula?',
    resetSettingsBody: 'Tetapkan semua tetapan ke nilai lalai?',
    modifierRestoreTitle: 'Tetapkan Semula ke Default?',
    modifierRestoreBody: 'Ini akan menetapkan semula semua tetapan permainan. Perubahan yang belum disimpan akan hilang.',
    modifierCancelBody:  'Quickplay menggunakan Versi 1 sebagai lalai. Menyimpan sebarang perubahan melalui butang ini akan mengaplikasikannya dalam Quickplay.',
    tetapanRestoreTitle: 'Pulihkan Tetapan Asal?',
    tetapanRestoreSaved: 'Anda telah menyimpan perubahan sebelum ini. Pulihkan semua tetapan ke asal?',
    tetapanRestoreYes:   'Ya, Pulihkan',
    // Tetapan labels
    tetapanSubtitle:   'Konfigurasi paparan dan tetapan aplikasi',
    tetDisplayHeader:  'Paparan',
    tetAccessHeader:   'Kebolehcapaian',
    tetLangHeader:     'Bahasa / Language',
    tetLblBlocked:     'Tunjuk kotak hitam',
    tetDescBlocked:    'Tunjuk kotak hitam dalam grid. Matikan untuk penampilan lebih bersih.',
    tetLblBorders:     'Tunjuk sempadan sel',
    tetDescBorders:    'Tunjuk sempadan pada sel yang boleh ditaip.',
    tetLblCellSize:    'Saiz sel:',
    tetLblReduceAnim:  'Kurangkan animasi',
    tetLblHighContrast:'Kontras tinggi',
    tetLblLargeClue:   'Teks clue besar',
    resetAllDataLabel: 'Tetapkan semula semua data',
    // Modifier settings
    modifierTitle:     'Tetapan Permainan',
    modifierSubtitle:  'Konfigurasi pilihan permainan anda',
    modLblGameMode:    'Mod Permainan',
    modDescGameMode:   'Pilih mod permainan:',
    modLblTimer:       'Pemasa',
    modDescTimer:      'Pilih tempoh:',
    modLblHints:       'Petunjuk',
    modDescHints:      'Pilih mod petunjuk:',
    // Launcher
    launcherSelectTitle: 'Pilih Kesukaran',
    switchCrosswordLabel:'Tukar Teka Silang Kata:',
    cluesHeader:         'Petunjuk',
    // Modals
    homeConfirmTitle:    'Balik ke Utama?',
    modifierCancelTitle: 'Kembali',
    gameMenuTitle:       'Menu Permainan',
    abortConfirmMsg:     'Anda akan berhenti dan kembali ke Menu Utama. Semua progres akan hilang.',
    abortConfirmQ:       'Adakah anda pasti?',
    homeSaveBtnLabel:    'Simpan & Keluar',
    homeNoSaveBtnLabel:  'Keluar Tanpa Simpan',
    notCheckedTitle:   'Belum Semak Lagi',
    notCheckedBody:    'Anda belum menyemak mana-mana teka silang kata lagi. Sila semak sekurang-kurangnya satu sebelum menghantar.',
    yesDelete:         'Ya, Padam',
    yesDeleteAll:      'Ya, Padam Semua',
    yesDeleteContinue: 'Ya, Padam & Teruskan',
    win:               '✅ Menang',
    lose:              '❌ Kalah',
    lives:             'Nyawa',
    version:           (v) => `Versi ${v}`,
    tetapanSaveMsg:    'Ada perubahan dibuat. Teruskan?',
    tetapanCancelMsg:  'Keluar dengan perubahan yang belum disimpan. Simpan atau tidak?',
  },
};

function t() {
  return STRINGS[appSettings.language] || STRINGS.en;
}

function loadAppSettings() {
  const saved = localStorage.getItem('appSettings');
  return saved ? { ...DEFAULT_APP_SETTINGS, ...JSON.parse(saved) } : { ...DEFAULT_APP_SETTINGS };
}

function saveAppSettings() {
  localStorage.setItem('appSettings', JSON.stringify(appSettings));
}

let appSettings = loadAppSettings();

function applyAppSettings() {
  const body = document.body;
  const grid = document.getElementById('crossword');

  // Blocked cells
  if (grid) grid.classList.toggle('grid--show-blocked', appSettings.showBlockedCells);

  // Cell borders
  if (grid) grid.classList.toggle('grid--hide-borders', !appSettings.showCellBorders);

  // Cell size — update CONFIG and re-render if in game
  const sizes = CELL_SIZES[appSettings.cellSize] || CELL_SIZES.normal;
  CONFIG.cellSize = sizes.cellSize;
  CONFIG.cellFontSize = sizes.cellFontSize;
  document.documentElement.style.setProperty('--cell-size', sizes.cellSize + 'px');
  document.documentElement.style.setProperty('--cell-font-size', sizes.cellFontSize + 'px');
  document.documentElement.style.setProperty('--number-font-size', sizes.numberFontSize + 'px');
  if (currentPuzzleKey && document.getElementById('game-screen').style.display !== 'none') {
    const sizes2 = getPuzzleSize(currentPuzzleKey);
    CONFIG.rows = sizes2.rows; CONFIG.cols = sizes2.cols;
    buildGrid(); renderCrossword();
    if (gameSettings.hintsMode !== 'off') applyHints(currentPuzzleKey, false);
    restorePuzzleState(currentPuzzleKey);
    refreshHintBold(currentPuzzleKey);
  }

  // Body classes
  body.classList.toggle('reduce-animations', appSettings.reduceAnimations);
  body.classList.toggle('high-contrast', appSettings.highContrast);
  body.classList.toggle('large-clue-text', appSettings.largeClueText);
}

function applyLanguage() {
  // Dynamic JS strings are picked up at call time via t()
  // Static HTML buttons need updating
  const lang = appSettings.language;
  const isEN = lang === 'en';

  // Text buttons - safe to update textContent directly
  const map = {
    'quickplayBtn':          isEN ? 'Quickplay'           : 'Main Terus',
    'playBtn':               isEN ? 'Play'                : 'Mulai Permainan',
    'settingsMenuBtn':       isEN ? 'Settings'            : 'Tetapan',
    'scoreboardBtn':         isEN ? 'Scoreboard'          : 'Papan Skor',
    'tutorialBtn':           isEN ? 'Tutorial'            : 'Tutorial',
    'quitMenuBtn':           isEN ? 'Quit'                : 'Keluar',
    'continueBtn':           isEN ? 'Continue'            : 'Teruskan',
    'checkBtn':              isEN ? 'Check Answers'       : 'Semak Jawapan',
    'resetBtn':              isEN ? '↺ Reset'             : '↺ Set Semula',
    'finalizeBtn':           isEN ? 'Submit All'          : 'Hantar Semua',
    'resumeGameBtn':         isEN ? 'Continue'            : 'Teruskan Permainan',
    'settingsBtn':           isEN ? 'Settings'            : 'Tetapan',
    'quitGameBtn':           isEN ? 'Quit to Main Menu'   : 'Keluar ke Menu Utama',
    'confirmAbortBtn':       isEN ? 'Yes, Quit'           : 'Ya, Keluar',
    'cancelAbortBtn':        isEN ? 'Cancel'              : 'Batal',
    'closeScoreboardBtn':    isEN ? 'Close'               : 'Tutup',
    'clearScoreboardBtn':    isEN ? 'Clear All'           : 'Padam Semua',
    'closeFinalBtn':         isEN ? 'Close'               : 'Tutup',
    'backToMenuFromFinalBtn':isEN ? 'Back to Main Menu'   : 'Balik ke Menu Utama',
    // Landing page
    'landingLabel':          isEN ? 'Year 5 · Moral Education'        : 'Tahun 5 · Pendidikan Moral',
    'landingSubtitle':       isEN ? 'Test your knowledge of moral values in everyday life' : 'Uji pengetahuan anda tentang nilai-nilai murni dalam kehidupan seharian',
    'landingTriviaTag':      isEN ? '📖 Did You Know?'              : '📖 Tahukah Anda?',
    'landingTriviaSub':      isEN ? 'Click to expand'              : 'Klik untuk kembangkan',
    'landingHint':           isEN ? 'Press Start to go to Main Menu' : 'Tekan Mula untuk ke Menu Utama',
    'landingStartLabel':     isEN ? 'Start'                         : 'Mula',
    // Tetapan
    'tetapanSubtitle':       isEN ? 'Configure display and app preferences' : 'Konfigurasi paparan dan tetapan aplikasi',
    'tetapanDisplayHeader':  isEN ? 'Display'                      : 'Paparan',
    'tetAccessHeader':       isEN ? 'Accessibility'                : 'Kebolehcapaian',
    'tetLangHeader':         isEN ? 'Language / Bahasa'             : 'Bahasa / Language',
    'tetLblBlocked':         isEN ? 'Show black boxes'              : 'Tunjuk kotak hitam',
    'tetDescBlocked':        isEN ? 'Show black boxes in the grid. Turn off for a cleaner look.' : 'Tunjuk kotak hitam dalam grid. Matikan untuk penampilan lebih bersih.',
    'tetLblBorders':         isEN ? 'Show cell borders'             : 'Tunjuk sempadan sel',
    'tetDescBorders':        isEN ? 'Show borders on typeable cells.' : 'Tunjuk sempadan pada sel yang boleh ditaip.',
    'tetLblCellSize':        isEN ? 'Cell size:'                   : 'Saiz sel:',
    'tetLblReduceAnim':      isEN ? 'Reduce animations'            : 'Kurangkan animasi',
    'tetLblHighContrast':    isEN ? 'High contrast'                : 'Kontras tinggi',
    'tetLblLargeClue':       isEN ? 'Large clue text'              : 'Teks clue besar',
    'resetAllDataLabel':     isEN ? 'Reset all data'               : 'Tetapkan semula semua data',
    // Modifier settings
    'modifierTitle':         isEN ? 'Game Settings'                : 'Tetapan Permainan',
    'modifierSubtitle':      isEN ? 'Configure your game preferences' : 'Konfigurasi pilihan permainan anda',
    'modLblGameMode':        isEN ? 'Game Mode'                    : 'Mod Permainan',
    'modDescGameMode':       isEN ? 'Select game mode:'            : 'Pilih mod permainan:',
    'modLblTimer':           isEN ? 'Timer'                         : 'Pemasa',
    'modDescTimer':          isEN ? 'Select Duration:'              : 'Pilih tempoh:',
    'modLblHints':           isEN ? 'Hints'                         : 'Petunjuk',
    'modDescHints':          isEN ? 'Select hint mode:'             : 'Pilih mod petunjuk:',
    // Launcher
    'launcherSelectTitle':   isEN ? 'Select Difficulty'            : 'Pilih Kesukaran',
    'switchCrosswordLabel':  isEN ? 'Switch Crossword:'            : 'Tukar Teka Silang Kata:',
    'cluesHeader':           isEN ? 'Clues'                         : 'Petunjuk',
    // Modals
    'homeConfirmTitle':      isEN ? 'Go Home?'                     : 'Balik ke Utama?',
    'modifierCancelTitle':   isEN ? 'Going Back'                   : 'Kembali',
    'gameMenuTitle':         isEN ? 'Game Menu'                    : 'Menu Permainan',
    'abortConfirmMsg':       isEN ? 'You are about to quit and return to the Main Menu. All progress will be lost.' : 'Anda akan berhenti dan kembali ke Menu Utama. Semua progres akan hilang.',
    'abortConfirmQ':         isEN ? 'Are you sure?'                : 'Adakah anda pasti?',
    'homeSaveBtnLabel':      isEN ? 'Save & Quit'                  : 'Simpan & Keluar',
    'homeNoSaveBtnLabel':    isEN ? 'Quit Without Saving'          : 'Keluar Tanpa Simpan',
  };
  Object.entries(map).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  // Icon buttons with SVG — update tooltip only, never textContent
  const tooltipMap = {
    'backToLauncher':     isEN ? 'Back'     : 'Balik',
    'homeBtn':            isEN ? 'Home'     : 'Utama',
    'launcherSettingsBtn':isEN ? 'Settings' : 'Tetapan',
    'gameSettingsBtn':    isEN ? 'Settings' : 'Tetapan',
    'menuBtn':            isEN ? 'Menu'     : 'Menu',
    'abortBtn':           isEN ? 'Abort'    : 'Batal',
    'tetapanBackBtn':     isEN ? 'Back'     : 'Balik',
    'modifierBackBtn':    isEN ? 'Back'     : 'Balik',
  };
  Object.entries(tooltipMap).forEach(([id, text]) => {
    const wrapper = document.getElementById(id)?.closest('.icon-btn-wrapper');
    if (wrapper) {
      const tooltip = wrapper.querySelector('.icon-btn-tooltip');
      if (tooltip) tooltip.textContent = text;
    }
  });

  // finalizeBtn has both icon and label — update just the label span
  const finalizeLabel = document.querySelector('#finalizeBtn .icon-btn-label');
  if (finalizeLabel) finalizeLabel.textContent = isEN ? 'Submit All' : 'Hantar Semua';

  updateRerollBtnState();
}

// ============================================
// SETTINGS MANAGEMENT
// ============================================

const DEFAULT_SETTINGS = {
  timerEnabled: true,
  timeLimit: 60,
  scoringEnabled: true,
  gameVersion: 1,
  hintsMode: 'fixed'  // 'fixed' | 'random' | 'off'
};

function loadSettings() {
  const saved = localStorage.getItem('gameSettings');
  return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved), gameVersion: 1, hintsMode: 'fixed' } : { ...DEFAULT_SETTINGS };
}

function saveSettings(settings) {
  localStorage.setItem('gameSettings', JSON.stringify(settings));
}

function resetSettingsToDefault() {
  saveSettings({ ...DEFAULT_SETTINGS });
  return { ...DEFAULT_SETTINGS };
}

let gameSettings = loadSettings();

// ============================================
// PUZZLE DATA
// ============================================

const CONFIG = {
  rows: 13,
  cols: 19,
  cellSize: 40,
  gridGap: 2,
  cellFontSize: 20
};

const PUZZLES = {
  HM3: {
    words: [
      { number: 1, word: "PRIHATIN", row: 1, col: 0, direction: "down", clue: "Kita haruslah bersikap ______ dengan orang yang lebih kurang upaya daripada kita." },
      { number: 2, word: "HARMONI", row: 0, col: 8, direction: "down", clue: "Sikap saling hormat-menghormati boleh menukarkan suasana persekitaran menjadi lebih ______." },
      { number: 3, word: "TERTIB", row: 2, col: 11, direction: "down", clue: "Ibubapa dan guru-guru bertanggungjawab untuk mendidik kanak-kanak tentang tata ______." },
      { number: 4, word: "RUKUN", row: 6, col: 4, direction: "down", clue: "Selain daripada menyanyikan lagu negeri dan sekolah, anda juga perlu membaca ______ negara semasa perhimpunan." },
      { number: 5, word: "ADAB", row: 9, col: 8, direction: "down", clue: "Anda menunjukkan ____ yang baik apabila anda menghormati ibubapa, rakan dan guru tanpa mengira batasan." },
      { number: 6, word: "RAKAN", row: 7, col: 17, direction: "down", clue: "Apakah perkataan lain untuk \"kawan\"?" },
      { number: 7, word: "KELUARGA", row: 1, col: 15, direction: "down", clue: "Kita boleh menyambut pelbagai sambutan dan perayaan dengan ahli-ahli _________." },
      { number: 8, word: "TOLERANSI", row: 6, col: 0, direction: "across", clue: "Anda berkongsi peralatan menulis dengan rakan anda yang berbangsa lain. Apakah sikap yang diamalkan?" },
      { number: 9, word: "HORMAT", row: 2, col: 6, direction: "across", clue: "Menunduk kepala di hadapan guru sambil mengucapkan salam menunjukkan sikap ______." },
      { number: 10, word: "BUDAYA", row: 9, col: 3, direction: "across", clue: "Negara kita mempunyai berbagai jenis bangsa, agama dan ______." },
      { number: 11, word: "KASIH-SAYANG", row: 11, col: 7, direction: "across", clue: "Kita haruslah menunjukkan lebih banyak ____________ kepada keluarga kita." },
      { number: 12, word: "GURU", row: 7, col: 15, direction: "across", clue: "Siapakah yang akan memberikan anda teguran dan nasihat apabila anda gagal menyiapkan kerja sekolah?" }
    ]
  },
  HM1: {
    words: [
      { number: 1, word: "MASYARAKAT", row: 1, col: 5, direction: "down", clue: "Kita boleh menyertai aktiviti bergotong-royong bersama ______ sekitar kita untuk mengeratkan lagi nilai kejiranan." },
      { number: 2, word: "JUJUR", row: 4, col: 7, direction: "down", clue: "Anda haruslah ______ apabila ingin berkongsi perkara peribadi dengan ibubapa." },
      { number: 3, word: "NEGARA", row: 6, col: 9, direction: "down", clue: "Kita haruslah mengingati jasa-jasa serta pengorbanan insan-insan yang telah berbakti kepada ______ kita." },
      { number: 4, word: "SABAR", row: 8, col: 2, direction: "down", clue: "Kita jangan terburu-buru membuat keputusan dan hendaklah ber______ apabila sedang mengatasi sebarang cabaran." },
      { number: 1, word: "MARUAH", row: 1, col: 5, direction: "across", clue: "Anda mewakili sekolah anda untuk menyertai pertandingan peringkat daerah. Selain daripada berusaha semasa bertanding, anda juga perlu menjaga ______ sekolah dari segi disiplin." },
      { number: 2, word: "JIRAN", row: 4, col: 7, direction: "across", clue: "Semasa perayaan atau sambutan, kita juga boleh menjemput ______ sekeliling rumah kita." },
      { number: 3, word: "SYUKUR", row: 8, col: 2, direction: "across", clue: "Anda haruslah ber______ dengan apa-apa sahaja yang anda miliki dan diberikan." },
      { number: 5, word: "RAJIN", row: 6, col: 5, direction: "across", clue: "Kita haruslah ______ melakukan sebarang aktiviti atau perkara yang berfaedah kepada kita." },
      { number: 6, word: "BANTU", row: 10, col: 2, direction: "across", clue: "Jika kawan kita sedang mengatasi sesuatu masalah, kita haruslah bersedia untuk mem____ mereka." },
      { number: 7, word: "AMANAH", row: 11, col: 9, direction: "across", clue: "Selain daripada bersikap jujur, apakah sikap lain yang anda perlu miliki sebagai seorang bendahari?" }
    ]
  },
  HM2: {
    words: [
      { number: 1, word: "SAHABAT", row: 1, col: 2, direction: "down", clue: "Selain daripada ibubapa, kita juga boleh meluangkan masa kita dengan ______ karib." },
      { number: 2, word: "RAMAH", row: 1, col: 6, direction: "down", clue: "Perbualan secara ______ tamah akan menimbulkan lebih banyak interaksi yang positif." },
      { number: 3, word: "AKAL", row: 1, col: 10, direction: "down", clue: "Kita haruslah menggunakan _____ pemikiran kita supaya kita boleh membuat pelbagai keputusan dengan lebih baik." },
      { number: 4, word: "BANGSA", row: 7, col: 4, direction: "down", clue: "Sebagai rakyat Malaysia, kita haruslah bersatu padu dan menghormati sesama sendiri tanpa mengira ______ dan agama." },
      { number: 5, word: "TAAT", row: 7, col: 7, direction: "down", clue: "Apabila anda mematuhi setiap peraturan yang telah diberikan, apakah sikap yang telah dipe?" },
      { number: 1, word: "SEDERHANA", row: 1, col: 2, direction: "across", clue: "Kita harus bersikap ______ semasa bertegur sapa dengan sesiapa sahaja." },
      { number: 6, word: "MARUAH", row: 3, col: 6, direction: "across", clue: "Kita patut menjaga _____ diri kita jika ingin mengekalkan pandangan positif daripada orang lain." },
      { number: 7, word: "HATI", row: 5, col: 6, direction: "across", clue: "Kita harus mengelakkan diri daripada melakukan perkara yang tidak bermoral kerana jenis-jenis perlakuan tersebut boleh menyinggung ______ ibubapa anda." },
      { number: 8, word: "TABIAT", row: 7, col: 2, direction: "across", clue: "Ibubapa perlu mengawal aktiviti anak-anak mereka seperti menggunakan tablet atau tidur lewat sebelum menjadi ______ buruk." }
    ]
  },
  EASY1: {
    words: [
      { number: 1, word: "JUJUR", row: 2, col: 5, direction: "down", clue: "Anda menjumpai wang di lantai semasa membersih kelas. Keesokan hari, anda memberikan wang itu kepada guru kelas. Apakah sikap yang diamalkan?" },
      { number: 2, word: "GURU", row: 3, col: 2, direction: "across", clue: "Siapakah yang mengajar anda di sekolah?" },
      { number: 3, word: "RAKAN", row: 6, col: 5, direction: "across", clue: "Anda harus saling bekerjasama dengan ______ sekelas anda untuk memahami sebarang subjek pembelajaran." }
    ]
  },
  MEDIUM1: {
    words: [
      { number: 1, word: "PERHATIAN", row: 2, col: 2, direction: "across", clue: "Kita haruslah sentiasa mengambil _______ dan mendengar dengan teliti semasa guru mengajar." },
      { number: 1, word: "PRIHATIN", row: 2, col: 2, direction: "down", clue: "Anda mengucapkan takziah kepada rakan anda yang telah kehilangan ahli keluarga. Apakah sikap yang diamalkan?" },
      { number: 2, word: "ARAHAN", row: 2, col: 9, direction: "down", clue: "Kita haruslah mendengar perhatian kepada _______ yang diberikan daripada guru sukan kita." },
      { number: 3, word: "TRADISI", row: 9, col: 8, direction: "down", clue: "Kita haruslah menghormati dan melindungi _______ yang telah ditinggalkan oleh datuk dan nenek moyang masa lalu." },
      { number: 4, word: "NASIHAT", row: 9, col: 2, direction: "across", clue: "Kita haruslah mendengar dan juga menilai _______ yang diberikan oleh golongan yang sudah tua kerana mereka lebih tahu dan berpengalaman." }
    ]
  },
  MEDIUM2: {
    words: [
      { number: 1, word: "PATRIOTIK", row: 2, col: 2, direction: "down", clue: "Anda mendengar lagu sekolah dan berdiri tegak. Apakah sikap yang diamalkan?" },
      { number: 2, word: "ADAB", row: 4, col: 7, direction: "down", clue: "Kita haruslah menjaga ______ semasa berada di tempat-tempat umum atau bertutur dengan orang lain." },
      { number: 3, word: "SOPAN", row: 7, col: 11, direction: "down", clue: "Kita haruslah berpakaian dan bersikap ______ semasa melawat rumah datuk dan nenek." },
      { number: 4, word: "SUKAN", row: 10, col: 8, direction: "down", clue: "Apakah aktiviti yang boleh membantu kita dalam segi kesihatan, semangat berpasukan dan sikap ingin mengharungi cabaran?" },
      { number: 5, word: "TOLERANSI", row: 4, col: 2, direction: "across", clue: "Apabila kita bertemu dengan individu yang berlainan bangsa, apakah sikap yang sepatutnya kita tunjukkan?" },
      { number: 6, word: "BAHASA", row: 7, col: 7, direction: "across", clue: "Melayu adalah ______ nasional negara Malaysia." },
      { number: 7, word: "KASIH-SAYANG", row: 10, col: 2, direction: "across", clue: "Ibubapa sering menyokong anak-anak mereka. Oleh itu, kita haruslah membalas budi dengan menunjukkan _____________ kepada mereka." }
    ]
  }
};

let PUZZLE_DATA = PUZZLES.HM3;

// ============================================
// FIXED HINTS DATA
// ============================================

const FIXED_HINTS = {
  EASY1: [
    {row:3,col:5,letter:'U'},
    {row:3,col:4,letter:'R'},
    {row:6,col:7,letter:'K'},
  ],
  MEDIUM1: [
    {row:2,col:5,letter:'H'},
    {row:4,col:2,letter:'I'},
    {row:11,col:8,letter:'A'},
    {row:9,col:4,letter:'S'},
  ],
  MEDIUM2: [
    {row:5,col:2,letter:'R'},
    {row:4,col:6,letter:'R'},
    {row:9,col:11,letter:'P'},
    {row:10,col:9,letter:'A'},
  ],
  HM1: [
    {row:3,col:5,letter:'S'},
    {row:4,col:5,letter:'Y'},
    {row:10,col:5,letter:'T'},
    {row:8,col:4,letter:'U'},
    {row:8,col:2,letter:'S'},
    {row:11,col:12,letter:'N'},
    {row:11,col:14,letter:'H'},
    {row:9,col:9,letter:'A'},
    {row:7,col:9,letter:'E'},
    {row:4,col:7,letter:'J'},
    {row:11,col:2,letter:'A'},
    {row:10,col:6,letter:'U'},
    {row:1,col:7,letter:'R'},
    {row:1,col:9,letter:'A'},
  ],
  HM2: [
    {row:1,col:3,letter:'E'},
    {row:1,col:6,letter:'R'},
    {row:1,col:8,letter:'A'},
    {row:1,col:9,letter:'N'},
    {row:7,col:4,letter:'B'},
    {row:9,col:4,letter:'N'},
    {row:10,col:4,letter:'G'},
    {row:7,col:5,letter:'I'},
    {row:7,col:7,letter:'T'},
    {row:5,col:8,letter:'T'},
    {row:4,col:10,letter:'L'},
    {row:3,col:2,letter:'H'},
    {row:5,col:2,letter:'B'},
  ],
  HM3: [
    {row:6,col:4,letter:'R'},
    {row:3,col:8,letter:'M'},
    {row:11,col:14,letter:'A'},
    {row:7,col:18,letter:'U'},
    {row:9,col:5,letter:'D'},
    {row:9,col:7,letter:'Y'},
    {row:5,col:11,letter:'T'},
    {row:2,col:11,letter:'T'},
    {row:3,col:15,letter:'L'},
    {row:4,col:15,letter:'U'},
  ],
};

// ============================================
// HINTS SYSTEM STATE
// ============================================

// activeHints: per-puzzle hint cells for current game session
// { EASY1: [{row,col,letter},...], ... }
let activeHints = {};

// Reroll counter — universal across puzzles
let rerollCount = 0;
let maxRerolls = 5; // stored at game-start, stable even if version changes mid-session

function getMaxRerolls() {
  return gameSettings.gameVersion === 2 ? 3 : 5;
}

function initHints() {
  maxRerolls = getMaxRerolls();
  rerollCount = maxRerolls;
  activeHints = {};
  // Pre-generate hints for all puzzles
  Object.keys(PUZZLES).forEach(key => {
    activeHints[key] = generateHintsForPuzzle(key);
  });
  updateRerollBtnState();
}

// ============================================
// HINT GENERATION
// ============================================

function generateHintsForPuzzle(puzzleKey) {
  const mode = gameSettings.hintsMode;
  if (mode === 'off') return [];
  if (mode === 'fixed') return (FIXED_HINTS[puzzleKey] || []).map(h => ({...h}));
  // 'random'
  return generateRandomHints(puzzleKey);
}

function generateRandomHints(puzzleKey) {
  const puzzle = PUZZLES[puzzleKey];
  if (!puzzle) return [];

  const isHard = ['HM1','HM2','HM3'].includes(puzzleKey);
  // For hard puzzles, only ~half the words get hints
  const hintProbability = isHard ? 0.5 : 1.0;

  const chosenCells = new Set(); // track "row-col" to handle intersections
  const hints = [];

  puzzle.words.forEach(word => {
    // Skip this word based on probability for hard puzzles
    if (Math.random() > hintProbability) return;

    // How many hints for this word: mostly 1, sometimes 2
    const maxHints = Math.random() < 0.4 ? 2 : 1;

    // Build candidate positions (skip hyphens, skip first letter)
    const candidates = [];
    for (let i = 1; i < word.word.length; i++) {
      if (word.word[i] === '-') continue;
      const r = word.direction === 'down' ? word.row + i : word.row;
      const c = word.direction === 'across' ? word.col + i : word.col;
      candidates.push({row: r, col: c, letter: word.word[i]});
    }

    // Shuffle candidates
    for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }

    let added = 0;
    for (const cand of candidates) {
      if (added >= maxHints) break;
      const key = `${cand.row}-${cand.col}`;
      // Intersections are allowed even if already chosen — just don't double-add
      if (!chosenCells.has(key)) {
        chosenCells.add(key);
        hints.push(cand);
        added++;
      }
    }
  });

  return hints;
}

// ============================================
// APPLY / CLEAR HINTS IN DOM
// ============================================

function applyHints(puzzleKey, animate) {
  const hints = activeHints[puzzleKey];
  if (!hints || hints.length === 0) return;

  hints.forEach((h, idx) => {
    const input = document.querySelector(`input[data-row="${h.row}"][data-col="${h.col}"]`);
    if (!input || input.disabled) {
      console.warn(`⚠️ applyHints: skipped hint at row${h.row},col${h.col} for ${puzzleKey} — cell not found or disabled`);
      return;
    }

    const delay = animate ? idx * 40 : 0;

    if (animate) {
      input.style.transition = 'none';
      input.style.transform = 'scale(0)';
      input.style.opacity = '0';
      setTimeout(() => {
        input.value = h.letter;
        input.dataset.hint = 'true';
        input.dataset.hintLetter = h.letter;
        input.classList.add('hint-cell');
        markHintWrapper(input);
        input.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
        input.style.transform = 'scale(1)';
        input.style.opacity = '1';
      }, delay + 50);
    } else {
      input.value = h.letter;
      input.dataset.hint = 'true';
      input.dataset.hintLetter = h.letter;
      input.classList.add('hint-cell');
      markHintWrapper(input);
    }
  });

  updateRerollBtnState();
}

function clearHintsFromDOM(puzzleKey, onDone) {
  const hints = activeHints[puzzleKey] || [];
  let pending = hints.length;
  if (pending === 0) { if (onDone) onDone(); return; }

  hints.forEach((h, idx) => {
    const input = document.querySelector(`input[data-row="${h.row}"][data-col="${h.col}"]`);
    if (!input) { pending--; if (pending === 0 && onDone) onDone(); return; }

    input.dataset.hint = '';
    input.classList.remove('hint-cell');
    unmarkHintWrapper(input);

    // Animate out: scale to 0
    const delay = idx * 40;
    setTimeout(() => {
      input.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
      input.style.transform = 'scale(0)';
      input.style.opacity = '0';
      setTimeout(() => {
        input.value = '';
        input.style.backgroundColor = '';
        input.style.transform = '';
        input.style.opacity = '';
        input.style.transition = '';
        pending--;
        if (pending === 0 && onDone) onDone();
      }, 220);
    }, delay);
  });
}

// ============================================
// REROLL
// ============================================

function rerollHints() {
  if (rerollCount <= 0 || !currentPuzzleKey) return;

  clearHintsFromDOM(currentPuzzleKey, function() {
    // Generate new hints for this puzzle only
    activeHints[currentPuzzleKey] = generateRandomHints(currentPuzzleKey);
    applyHints(currentPuzzleKey, true);
    rerollCount--;
    updateRerollBtnState();
  });
}

function refreshHintBold(puzzleKey) {
  const hints = activeHints[puzzleKey] || [];
  hints.forEach(h => {
    const input = document.querySelector(`input[data-row="${h.row}"][data-col="${h.col}"]`);
    if (!input || input.dataset.hint !== 'true') return;
    const bg = input.style.backgroundColor;
    const hasSemakColor = bg === 'rgb(143, 206, 0)' || bg === '#8fce00'
      || bg === 'rgb(255, 107, 107)' || bg === '#ff6b6b'
      || bg === 'rgb(255, 235, 59)' || bg === '#ffeb3b';
    input.style.fontWeight = hasSemakColor ? '400' : '700';
  });
}

function markHintWrapper(input) {
  const w = input.parentElement;
  if (!w) return;
  w.classList.add('hint-wrapper');
  if (!w.querySelector('.hint-corner-bl')) {
    const bl = document.createElement('span');
    bl.className = 'hint-corner-bl';
    const br = document.createElement('span');
    br.className = 'hint-corner-br';
    w.appendChild(bl);
    w.appendChild(br);
  }
}

function unmarkHintWrapper(input) {
  const w = input.parentElement;
  if (!w) return;
  w.classList.remove('hint-wrapper');
  w.querySelectorAll('.hint-corner-bl, .hint-corner-br').forEach(el => el.remove());
}

function updateRerollBtnState() {
  const btn = document.getElementById('rerollBtn');
  if (!btn) return;
  const isRandom = gameSettings.hintsMode === 'random';
  btn.style.display = isRandom ? 'inline-flex' : 'none';
  if (rerollCount <= 0) {
    btn.disabled = true;
    btn.title = t().rerollNone;
  } else {
    btn.disabled = false;
    btn.title = t().rerollTitle(rerollCount, maxRerolls);
  }
}

// ============================================
// GAME STATE
// ============================================

let state = {
  direction: "across-right",
  grid: []
};

let puzzleStates = {};
let livesRemaining = 8;
let currentPuzzleKey = null;

// ============================================
// SESSION SAVE / LOAD (localStorage)
// ============================================

const SESSION_KEY = 'gameSession';

function saveSession() {
  const session = {
    puzzleStates,
    livesRemaining,
    currentPuzzleKey,
    remainingSeconds,
    gameSettings: { ...gameSettings },
    activeHints,
    rerollCount,
    maxRerolls,
    savedAt: Date.now()
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function loadSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch (e) { return null; }
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function hasSavedSession() {
  return !!localStorage.getItem(SESSION_KEY);
}

function updateContinueUI() {
  const continueRow = document.getElementById('continueRow');
  const has = hasSavedSession();
  if (continueRow) continueRow.style.display = has ? 'flex' : 'none';
}

// ============================================
// SCOREBOARD
// ============================================

const SCOREBOARD_KEY = 'scoreboardHistory';
const SCOREBOARD_MAX = 10;

function loadScoreboard() {
  try {
    const raw = localStorage.getItem(SCOREBOARD_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function saveScoreboardEntry(entry) {
  let board = loadScoreboard();
  board.unshift(entry); // newest first
  if (board.length > SCOREBOARD_MAX) board = board.slice(0, SCOREBOARD_MAX);
  localStorage.setItem(SCOREBOARD_KEY, JSON.stringify(board));
}

function clearScoreboard() {
  localStorage.removeItem(SCOREBOARD_KEY);
}

function addScoreboardEntry(totalScore, livesLeft, version, outcome) {
  const now = new Date();
  const dateStr = now.toLocaleDateString('ms-MY', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('ms-MY', { hour: '2-digit', minute: '2-digit' });
  saveScoreboardEntry({
    date: `${dateStr} ${timeStr}`,
    version: version,
    score: totalScore,
    maxScore: 600,
    livesLeft,
    maxLives: version === 2 ? 5 : 8,
    outcome: version === 2 ? outcome : null
  });
}

function renderScoreboard() {
  const content = document.getElementById('scoreboardContent');
  if (!content) return;
  const board = loadScoreboard();

  if (board.length === 0) {
    content.innerHTML = `<p class="scoreboard-empty">${t().noRecords}</p>`;
    return;
  }

  const medals = ['🥇', '🥈', '🥉', '4', '5'];
  const rankClasses = ['sb-rank--gold', 'sb-rank--silver', 'sb-rank--bronze', 'sb-rank--4', 'sb-rank--5'];

  const rows = board.map((entry, i) => {
    const rankDisplay = i < 5
      ? `<span class="sb-rank ${rankClasses[i] || ''}">${medals[i] || i + 1}</span>`
      : `<span class="sb-rank sb-rank--plain">${i + 1}</span>`;
    const outcomeDisplay = entry.outcome !== null
      ? (entry.outcome ? t().win : t().lose)
      : '—';
    return `
      <tr class="${i < 3 ? 'sb-row--top' : ''}">
        <td>${rankDisplay}</td>
        <td>${entry.date}</td>
        <td>${entry.version === 1 ? 'Version 1' : 'Version 2'}</td>
        <td><strong>${entry.score}</strong> / ${entry.maxScore}</td>
        <td>❤️ ${entry.livesLeft} / ${entry.maxLives}</td>
        <td>${outcomeDisplay}</td>
      </tr>`;
  }).join('');

  content.innerHTML = `
    <table class="sb-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Mode</th>
          <th>Score</th>
          <th>${t().lives}</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

// ============================================
// ICON BUTTON TOOLTIP SYSTEM
// ============================================

function attachIconTooltips() {
  document.querySelectorAll('.icon-btn-wrapper').forEach(wrapper => {
    const btn = wrapper.querySelector('.icon-btn');
    const tooltip = wrapper.querySelector('.icon-btn-tooltip');
    if (!btn || !tooltip) return;
    let timer = null;
    btn.addEventListener('mouseenter', function () {
      timer = setTimeout(() => tooltip.classList.add('icon-btn-tooltip--visible'), 700);
    });
    btn.addEventListener('mouseleave', function () {
      clearTimeout(timer);
      tooltip.classList.remove('icon-btn-tooltip--visible');
    });
  });
}

// ============================================
// LAUNCHER STATUS BAR
// ============================================

function renderLauncherStatus() {
  const timerText = document.getElementById('launcherTimerText');
  const livesText = document.getElementById('launcherLivesText');

  if (timerText) {
    if (!gameSettings.timerEnabled) {
      timerText.textContent = '∞';
      timerText.style.color = '#bbb';
    } else if (remainingSeconds > 0) {
      const mins = Math.floor(remainingSeconds / 60);
      const secs = remainingSeconds % 60;
      timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} (${t().paused})`;
      timerText.style.color = remainingSeconds <= 60 ? '#ff6b6b' : remainingSeconds <= 300 ? '#ffb300' : '#667eea';
    } else {
      timerText.textContent = `${String(gameSettings.timeLimit).padStart(2, '0')}:00`;
      timerText.style.color = '#667eea';
    }
  }

  if (livesText) {
    livesText.textContent = `${livesRemaining} / ${getMaxLives()} ${t().attempts}`;
    livesText.style.color = livesRemaining <= 1 ? '#ff6b6b' : livesRemaining <= 3 ? '#ffb300' : '#333';
  }
}

// ============================================
// RESET BUTTON HOVER EFFECTS
// ============================================

let resetTooltipTimer = null;
let resetTooltipInterval = null;

function attachResetHoverEffects() {
  const resetBtn = document.getElementById('resetBtn');
  const tooltip = document.getElementById('resetTooltip');
  const livesDisplay = document.getElementById('livesDisplay');
  if (!resetBtn) return;

  resetBtn.addEventListener('mouseenter', function () {
    if (resetBtn.disabled) return;
    resetBtn.classList.add('reset-btn--hover');
    if (livesDisplay) livesDisplay.classList.add('lives--reset-warn');
    resetTooltipTimer = setTimeout(function () {
      if (tooltip) {
        // Show tooltip
        tooltip.textContent = `❤️ ${livesRemaining} / ${getMaxLives()} ${t().attempts}`;
        tooltip.classList.add('reset-tooltip--visible');
        // Live update every 100ms while visible
        resetTooltipInterval = setInterval(function () {
          tooltip.textContent = `❤️ ${livesRemaining} / ${getMaxLives()} ${t().attempts}`;
        }, 100);
      }
    }, 700);
  });

  resetBtn.addEventListener('mouseleave', function () {
    resetBtn.classList.remove('reset-btn--hover');
    if (livesDisplay) livesDisplay.classList.remove('lives--reset-warn');
    clearTimeout(resetTooltipTimer);
    clearInterval(resetTooltipInterval);
    if (tooltip) tooltip.classList.remove('reset-tooltip--visible');
  });
}

function triggerHeartShake() {
  const livesDisplay = document.getElementById('livesDisplay');
  const resetBtn = document.getElementById('resetBtn');
  if (livesDisplay) {
    livesDisplay.classList.add('lives--shake');
    setTimeout(() => livesDisplay.classList.remove('lives--shake'), 600);
  }
  if (resetBtn && !resetBtn.disabled) {
    resetBtn.classList.add('reset-btn--shake');
    setTimeout(() => resetBtn.classList.remove('reset-btn--shake'), 600);
  }
}

// ============================================
// LIVES
// ============================================

function getMaxLives() {
  return gameSettings.gameVersion === 2 ? 5 : 8;
}

function initLives() {
  livesRemaining = getMaxLives();
  renderLives();
}

function spendLife() {
  if (livesRemaining > 0) livesRemaining--;
  renderLives();
  updateResetButtonState();
  triggerHeartShake();
}

function renderLives() {
  const livesDisplay = document.getElementById('livesDisplay');
  if (!livesDisplay) return;
  const max = getMaxLives();
  let html = '';
  for (let i = 0; i < max; i++) {
    html += `<span class="life-heart ${i < livesRemaining ? 'life-active' : 'life-lost'}">❤️</span>`;
  }
  livesDisplay.innerHTML = html;
}

function updateResetButtonState() {
  const resetBtn = document.getElementById('resetBtn');
  if (!resetBtn) return;
  if (livesRemaining <= 0) {
    resetBtn.disabled = true;
    resetBtn.title = t().resetNone;
  } else {
    resetBtn.disabled = false;
    resetBtn.title = '';
  }
}

// ============================================
// SCORING (word-based, normalized to 100 per puzzle)
// ============================================

function getPointsPerWord(puzzleKey) {
  const puzzle = PUZZLES[puzzleKey];
  if (!puzzle) return 0;
  return Math.round(100 / puzzle.words.length);
}

function isWordCorrectInDOM(word) {
  for (let i = 0; i < word.word.length; i++) {
    const letter = word.word[i];
    if (letter === '-') continue;
    const r = word.direction === 'down' ? word.row + i : word.row;
    const c = word.direction === 'across' ? word.col + i : word.col;
    const input = document.querySelector(`input[data-row="${r}"][data-col="${c}"]`);
    if (!input) return false;
    if (input.value.toUpperCase() !== letter) return false;
  }
  return true;
}

function calculateWordScore(puzzleKey) {
  if (!gameSettings.scoringEnabled) return 0;
  const puzzle = PUZZLES[puzzleKey];
  if (!puzzle) return 0;
  const pts = getPointsPerWord(puzzleKey);
  let score = 0;
  puzzle.words.forEach(w => { if (isWordCorrectInDOM(w)) score += pts; });
  return score;
}

function countWords(puzzleKey) {
  const puzzle = PUZZLES[puzzleKey];
  if (!puzzle) return { correct: 0, wrong: 0 };
  let correct = 0, wrong = 0;
  puzzle.words.forEach(w => { if (isWordCorrectInDOM(w)) correct++; else wrong++; });
  return { correct, wrong };
}

// ============================================
// PUZZLE STATE SAVE / RESTORE
// ============================================

function getPuzzleSize(puzzleKey) {
  const sizes = {
    HM3: { rows: 13, cols: 19 }, HM1: { rows: 14, cols: 17 },
    HM2: { rows: 14, cols: 14 }, EASY1: { rows: 9, cols: 13 },
    MEDIUM1: { rows: 18, cols: 13 }, MEDIUM2: { rows: 17, cols: 16 }
  };
  return sizes[puzzleKey] || { rows: CONFIG.rows, cols: CONFIG.cols };
}

function savePuzzleState(puzzleKey) {
  if (!puzzleKey || !PUZZLES[puzzleKey]) return;
  const { rows, cols } = getPuzzleSize(puzzleKey);
  const cells = {}, colors = {};
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const input = document.querySelector(`input[data-row="${r}"][data-col="${c}"]`);
      if (input && !input.disabled) {
        cells[`${r}-${c}`] = input.value;
        colors[`${r}-${c}`] = input.style.backgroundColor || '';
      }
    }
  }
  const resultMessage = document.getElementById('resultMessage');
  const existing = puzzleStates[puzzleKey] || {};
  puzzleStates[puzzleKey] = {
    ...existing,
    cells,
    colors,
    resultText: resultMessage ? resultMessage.textContent : '',
    resultBg: resultMessage ? resultMessage.style.backgroundColor : '',
    resultColor: resultMessage ? resultMessage.style.color : ''
  };
}

function restorePuzzleState(puzzleKey) {
  const saved = puzzleStates[puzzleKey];
  if (!saved || !saved.cells) return false;
  const { rows, cols } = getPuzzleSize(puzzleKey);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const input = document.querySelector(`input[data-row="${r}"][data-col="${c}"]`);
      if (input && !input.disabled) {
        const k = `${r}-${c}`;
        input.value = saved.cells[k] || '';
        input.style.backgroundColor = saved.colors[k] || '';
      }
    }
  }
  const resultMessage = document.getElementById('resultMessage');
  if (resultMessage) {
    resultMessage.textContent = saved.resultText || '';
    resultMessage.style.backgroundColor = saved.resultBg || '';
    resultMessage.style.color = saved.resultColor || '';
  }
  return true;
}

function markSemakDone(puzzleKey) {
  if (!puzzleStates[puzzleKey]) puzzleStates[puzzleKey] = {};
  puzzleStates[puzzleKey].semakDone = true;
  updatePuzzleCardStatus(puzzleKey);
  updateFinalizeButton();
}

function getSemakCount() {
  return Object.values(puzzleStates).filter(s => s && s.semakDone).length;
}

function updatePuzzleCardStatus(puzzleKey) {
  const card = document.querySelector(`.puzzle-card[data-puzzle="${puzzleKey}"]`);
  if (!card) return;
  const saved = puzzleStates[puzzleKey];
  card.classList.remove('puzzle-card--checked', 'puzzle-card--started');
  if (saved && saved.semakDone) {
    card.classList.add('puzzle-card--checked');
  } else if (saved && saved.cells && Object.values(saved.cells).some(v => v !== '')) {
    card.classList.add('puzzle-card--started');
  }
}

function updateAllCardStatuses() {
  Object.keys(PUZZLES).forEach(k => updatePuzzleCardStatus(k));
}

// ============================================
// FINALIZE
// ============================================

function updateFinalizeButton() {
  const btn = document.getElementById('finalizeBtn');
  if (!btn) return;
  if (getSemakCount() === 0) {
    btn.classList.add('btn-disabled-soft');
  } else {
    btn.classList.remove('btn-disabled-soft');
  }
}

function handleFinalize() {
  const semakCount = getSemakCount();
  const totalPuzzles = Object.keys(PUZZLES).length;
  if (semakCount === 0) {
    showInfoModal(t().notCheckedTitle, t().notCheckedBody, 'Okay');
    return;
  }
  if (semakCount < totalPuzzles) {
    const unchecked = totalPuzzles - semakCount;
    showConfirmModal(
      t().uncheckedTitle,
      t().uncheckedWarning(unchecked),
      t().uncheckedYes, 'Cancel',
      () => showFinalScore()
    );
    return;
  }
  showFinalScore();
}

function showFinalScore() {
  let totalScore = 0, totalCorrect = 0, totalWrong = 0;
  const labels = {
    EASY1: 'Easy Mode 1', MEDIUM1: 'Medium Mode 1', MEDIUM2: 'Medium Mode 2',
    HM1: 'Hard Mode 1', HM2: 'Hard Mode 2', HM3: 'Hard Mode 3'
  };
  const rows = Object.keys(PUZZLES).map(key => {
    const saved = puzzleStates[key];
    const puzzle = PUZZLES[key];
    const pts = getPointsPerWord(key);
    let correct = 0, wrong = 0, score = 0;
    if (saved && saved.semakDone && saved.cells) {
      puzzle.words.forEach(word => {
        let wordCorrect = true;
        for (let i = 0; i < word.word.length; i++) {
          if (word.word[i] === '-') continue;
          const r = word.direction === 'down' ? word.row + i : word.row;
          const c = word.direction === 'across' ? word.col + i : word.col;
          const val = (saved.cells[`${r}-${c}`] || '').toUpperCase();
          if (val !== word.word[i]) { wordCorrect = false; break; }
        }
        if (wordCorrect) { correct++; score += pts; } else wrong++;
      });
    } else {
      wrong = puzzle.words.length;
    }
    totalScore += score;
    totalCorrect += correct;
    totalWrong += wrong;
    return { label: labels[key] || key, correct, wrong, score, semakDone: !!(saved && saved.semakDone) };
  });

  let outcomeHtml = '';
  if (gameSettings.gameVersion === 2) {
    if (totalCorrect > totalWrong) {
      outcomeHtml = `<div class="final-outcome final-outcome--win">${t().finalWin}</div>`;
    } else {
      outcomeHtml = `<div class="final-outcome final-outcome--lose">${t().finalLose}</div>`;
    }
  }

  const unsemakLabel = appSettings.language === 'en' ? 'Not checked' : 'Tidak disemak';
  const tableRows = rows.map(r => `
    <tr class="${r.semakDone ? '' : 'final-row--unsemak'}">
      <td>${r.label}</td>
      <td class="final-correct">${r.correct}</td>
      <td class="final-wrong">${r.wrong}</td>
      <td>${r.semakDone ? `${r.score} / 100` : `<em>${unsemakLabel}</em>`}</td>
    </tr>`).join('');

  const livesLabel = appSettings.language === 'en' ? 'Lives left' : 'Nyawa tinggal';
  const content = document.getElementById('finalScoreContent');
  if (content) {
    content.innerHTML = `
      ${outcomeHtml}
      <div class="final-summary">
        <div class="final-total">${t().finalTotal(totalScore)}</div>
        <div class="final-lives">${livesLabel}: <strong>${livesRemaining} / ${getMaxLives()}</strong></div>
      </div>
      <table class="final-table">
        <thead><tr><th>${t().finalHeaderPuzzle}</th><th>${t().finalHeaderRight}</th><th>${t().finalHeaderWrong}</th><th>${t().finalHeaderScore}</th></tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
      <p class="final-note">${t().finalNote}</p>`;
  }

  // Save to scoreboard
  const outcome = gameSettings.gameVersion === 2 ? totalCorrect > totalWrong : null;
  addScoreboardEntry(totalScore, livesRemaining, gameSettings.gameVersion, outcome);

  const modal = document.getElementById('finalScoreModal');
  if (modal) modal.style.display = 'flex';
}

// ============================================
// GRID HELPERS
// ============================================

function initializeGrid() {
  return Array.from({ length: CONFIG.rows }, () => Array(CONFIG.cols).fill(null));
}

function placeWord(word, row, col, direction) {
  if (direction === "across" && col + word.length > CONFIG.cols) return false;
  if (direction === "down" && row + word.length > CONFIG.rows) return false;
  for (let i = 0; i < word.length; i++) {
    if (direction === "across") state.grid[row][col + i] = word[i];
    else state.grid[row + i][col] = word[i];
  }
  return true;
}

function buildGrid() {
  state.grid = initializeGrid();
  PUZZLE_DATA.words.forEach(({ word, row, col, direction }) => placeWord(word, row, col, direction));
  return state.grid;
}

function generateStartNumbers() {
  const startNumbers = {};
  PUZZLE_DATA.words.forEach(w => {
    const key = `${w.row}-${w.col}`;
    if (!startNumbers[key] || w.number < startNumbers[key]) startNumbers[key] = w.number;
  });
  return startNumbers;
}

// ============================================
// RENDER
// ============================================

function renderCrossword() {
  const container = document.getElementById("crossword");
  if (!container) return;
  container.innerHTML = "";
  const startNumbers = generateStartNumbers();
  const tbody = document.createElement("tbody");
  for (let r = 0; r < CONFIG.rows; r++) {
    const tr = document.createElement("tr");
    for (let c = 0; c < CONFIG.cols; c++) {
      const td = document.createElement("td");
      const wrapper = document.createElement("div");
      wrapper.classList.add("cell-wrapper");
      const input = document.createElement("input");
      input.maxLength = 1;
      input.classList.add("cell");
      input.dataset.row = r;
      input.dataset.col = c;
      if (state.grid[r][c] === null) {
        input.classList.add("blocked"); input.disabled = true;
        wrapper.classList.add("blocked-wrapper");
        td.classList.add("td-blocked");
      } else if (state.grid[r][c] === "-") {
        input.value = "-"; input.classList.add("hyphen"); input.disabled = true;
      }
      const key = `${r}-${c}`;
      if (startNumbers[key]) {
        const span = document.createElement("span");
        span.textContent = startNumbers[key];
        span.classList.add("cell-number");
        wrapper.appendChild(span);
      }
      wrapper.appendChild(input);
      td.appendChild(wrapper);
      tr.appendChild(td);
      if (!input.disabled) attachInputListener(input, r, c);
    }
    tbody.appendChild(tr);
  }
  container.appendChild(tbody);
}

// ============================================
// INPUT LISTENER (unchanged from original)
// ============================================

function attachInputListener(input, row, col) {
  let previousValue = input.value;

  input.addEventListener("focus", function () {
    previousValue = this.value;
    const cellWords = PUZZLE_DATA.words.filter(w => {
      if (w.direction === "across") return row === w.row && col >= w.col && col < w.col + w.word.length;
      else return col === w.col && row >= w.row && row < w.row + w.word.length;
    });
    if (cellWords.length === 1) state.direction = cellWords[0].direction;
  });

  input.addEventListener("beforeinput", function (e) {
    if (e.inputType !== "insertText") return;

    // Hint cells always behave as filled — skip through them
    if (input.dataset.hint === 'true' || (previousValue !== "" && input.value !== "")) {
      e.preventDefault();
      const cellWords = PUZZLE_DATA.words.filter(w => {
        if (w.direction === "across") return row === w.row && col >= w.col && col < w.col + w.word.length;
        else return col === w.col && row >= w.row && row < w.row + w.word.length;
      });
      let moveDirection = "across-right";
      if (cellWords.length === 1) moveDirection = cellWords[0].direction === "down" ? "down" : "across-right";
      else if (cellWords.length > 1) moveDirection = state.direction;
      state.direction = moveDirection;
      let nextRow = row + (moveDirection === "down" ? 1 : 0);
      let nextCol = col + (moveDirection !== "down" ? 1 : 0);
      while (nextRow >= 0 && nextRow < CONFIG.rows && nextCol >= 0 && nextCol < CONFIG.cols) {
        const nextInput = document.querySelector(`input[data-row="${nextRow}"][data-col="${nextCol}"]`);
        if (!nextInput) break;
        if (nextInput.value === "-") { nextRow += (moveDirection === "down" ? 1 : 0); nextCol += (moveDirection !== "down" ? 1 : 0); continue; }
        if (nextInput.disabled) break;
        nextInput.focus(); showCursorIndicator(nextRow, nextCol); break;
      }
    }
  });

  input.addEventListener("input", function () {
    // Hint cells — restore letter, don't advance
    if (input.dataset.hint === 'true') {
      input.value = input.dataset.hintLetter || input.value;
      return;
    }
    previousValue = input.value;
    input.value = input.value.toUpperCase();
    input.style.backgroundColor = "";
    if (input.value === "") return;
    const cellWords = PUZZLE_DATA.words.filter(w => {
      if (w.direction === "across") return row === w.row && col >= w.col && col < w.col + w.word.length;
      else return col === w.col && row >= w.row && row < w.row + w.word.length;
    });
    let autoDirection = "across-right";
    if (cellWords.length === 1) autoDirection = cellWords[0].direction === "down" ? "down" : "across-right";
    else if (cellWords.length > 1) autoDirection = state.direction;
    state.direction = autoDirection;
    let nextRow = row + (state.direction === "down" ? 1 : 0);
    let nextCol = col + (state.direction !== "down" ? 1 : 0);
    while (nextRow >= 0 && nextRow < CONFIG.rows && nextCol >= 0 && nextCol < CONFIG.cols) {
      const nextInput = document.querySelector(`input[data-row="${nextRow}"][data-col="${nextCol}"]`);
      if (!nextInput) break;
      if (nextInput.value === "-") { nextRow += (state.direction === "down" ? 1 : 0); nextCol += (state.direction !== "down" ? 1 : 0); continue; }
      if (nextInput.disabled) break;
      nextInput.focus(); showCursorIndicator(nextRow, nextCol); previousValue = nextInput.value; break;
    }
  });
}

// ============================================
// KEYBOARD LISTENER (unchanged from original)
// ============================================

let keyboardHandler = null;

function attachKeyboardListener() {
  if (keyboardHandler) document.removeEventListener("keydown", keyboardHandler);
  keyboardHandler = function (e) {
    const activeCell = document.activeElement;
    if (activeCell.tagName !== "INPUT") return;
    const row = parseInt(activeCell.dataset.row);
    const col = parseInt(activeCell.dataset.col);

    if (e.key === "ArrowRight") { e.preventDefault(); moveFocusInDirection(row, col, 0, 1); return; }
    if (e.key === "ArrowLeft") { e.preventDefault(); moveFocusInDirection(row, col, 0, -1); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); moveFocusInDirection(row, col, 1, 0); return; }
    if (e.key === "ArrowUp") { e.preventDefault(); moveFocusInDirection(row, col, -1, 0); return; }

    if (e.key === " ") {
      e.preventDefault();
      const cellWords = PUZZLE_DATA.words.filter(w => {
        if (w.direction === "across") return row === w.row && col >= w.col && col < w.col + w.word.length;
        else return col === w.col && row >= w.row && row < w.row + w.word.length;
      });
      let moveDirection = "across-right";
      if (cellWords.length === 1) moveDirection = cellWords[0].direction === "down" ? "down" : "across-right";
      else if (cellWords.length > 1) moveDirection = state.direction;
      state.direction = moveDirection;
      if (moveDirection === "down") moveFocusInDirection(row, col, 1, 0);
      else moveFocusInDirection(row, col, 0, 1);
      return;
    }

    if (e.key === "Backspace") {
      e.preventDefault();
      const cellWords = PUZZLE_DATA.words.filter(w => {
        if (w.direction === "across") return row === w.row && col >= w.col && col < w.col + w.word.length;
        else return col === w.col && row >= w.row && row < w.row + w.word.length;
      });
      if (cellWords.length === 0) { if (activeCell.dataset.hint !== 'true') activeCell.value = ""; return; }
      let targetWord = cellWords.find(w => state.direction === "down" ? w.direction === "down" : w.direction === "across") || cellWords[0];
      const isDown = targetWord.direction === "down";
      if (activeCell.dataset.hint !== 'true') {
        activeCell.value = "";
        activeCell.style.backgroundColor = "";
      }
      let nextRow = row + (isDown ? -1 : 0);
      let nextCol = col + (!isDown ? -1 : 0);
      if (nextRow < 0 || nextRow >= CONFIG.rows || nextCol < 0 || nextCol >= CONFIG.cols) return;
      const nextInput = document.querySelector(`input[data-row="${nextRow}"][data-col="${nextCol}"]`);
      if (!nextInput) return;
      if (nextInput.value === "-") {
        nextRow += (isDown ? -1 : 0); nextCol += (!isDown ? -1 : 0);
        if (nextRow >= 0 && nextRow < CONFIG.rows && nextCol >= 0 && nextCol < CONFIG.cols) {
          const skip = document.querySelector(`input[data-row="${nextRow}"][data-col="${nextCol}"]`);
          if (skip && !skip.disabled) { skip.focus(); showCursorIndicator(nextRow, nextCol); }
        }
        return;
      }
      if (nextInput.disabled) return;
      const nextCellWords = PUZZLE_DATA.words.filter(w => {
        if (w.direction === "across") return nextRow === w.row && nextCol >= w.col && nextCol < w.col + w.word.length;
        else return nextCol === w.col && nextRow >= w.row && nextRow < w.row + w.word.length;
      });
      const isStillInTargetWord = isDown
        ? (nextRow >= targetWord.row && nextRow < targetWord.row + targetWord.word.length && nextCol === targetWord.col)
        : (nextCol >= targetWord.col && nextCol < targetWord.col + targetWord.word.length && nextRow === targetWord.row);
      if (!isStillInTargetWord) return;
      const sameDir = nextCellWords.find(w => (isDown && w.direction === "down") || (!isDown && w.direction === "across"));
      if (!sameDir) return;
      nextInput.focus(); showCursorIndicator(nextRow, nextCol);
    }
  };
  document.addEventListener("keydown", keyboardHandler);
}

function moveFocusInDirection(currentRow, currentCol, rowDelta, colDelta) {
  let row = currentRow + rowDelta, col = currentCol + colDelta;
  while (row >= 0 && row < CONFIG.rows && col >= 0 && col < CONFIG.cols) {
    const next = document.querySelector(`input[data-row="${row}"][data-col="${col}"]`);
    if (!next) break;
    if (next.value === "-") { row += rowDelta; col += colDelta; continue; }
    if (next.disabled) break;
    next.focus(); showCursorIndicator(row, col); return;
  }
}

function showCursorIndicator(row, col) {
  document.querySelectorAll(".cursor-indicator").forEach(el => el.classList.remove("cursor-indicator"));
  const input = document.querySelector(`input[data-row="${row}"][data-col="${col}"]`);
  if (input) {
    input.classList.add("cursor-indicator");
    const cellWords = PUZZLE_DATA.words.filter(w => {
      if (w.direction === "across") return row === w.row && col >= w.col && col < w.col + w.word.length;
      else return col === w.col && row >= w.row && row < w.row + w.word.length;
    });
    if (cellWords.length > 0) {
      const match = cellWords.find(w => state.direction === "down" ? w.direction === "down" : w.direction === "across");
      state.direction = (match || cellWords[0]).direction === "down" ? "down" : "across-right";
    }
  }
}

// ============================================
// ANSWER CHECKING
// ============================================

function checkAnswers() {
  let allCorrect = true, allFilled = true;
  for (let r = 0; r < CONFIG.rows; r++) {
    for (let c = 0; c < CONFIG.cols; c++) {
      if (state.grid[r][c] === null) continue;
      const input = document.querySelector(`input[data-row="${r}"][data-col="${c}"]`);
      if (!input) continue;
      const userValue = input.value.toUpperCase();
      const correctValue = state.grid[r][c];
      if (userValue === "") {
        input.style.backgroundColor = "#ffeb3b"; allFilled = false; allCorrect = false;
      } else if (userValue === correctValue) {
        input.style.backgroundColor = "#8fce00";
      } else {
        input.style.backgroundColor = "#ff6b6b"; allCorrect = false;
      }
    }
  }
  return { allCorrect, allFilled };
}

function displayResult(allCorrect, allFilled, puzzleKey) {
  const resultMessage = document.getElementById("resultMessage");
  if (!resultMessage) return;
  const score = calculateWordScore(puzzleKey);
  const { correct, wrong } = countWords(puzzleKey);
  if (!allFilled) {
    resultMessage.textContent = t().checkEmpty(score, correct, wrong);
    resultMessage.style.color = "#333";
    resultMessage.style.backgroundColor = "#fff9c4";
  } else if (allCorrect) {
    resultMessage.textContent = t().checkAllCorrect(score);
    resultMessage.style.color = "white";
    resultMessage.style.backgroundColor = "#8fce00";
  } else {
    resultMessage.textContent = t().checkSomeWrong(score, correct, wrong);
    resultMessage.style.color = "white";
    resultMessage.style.backgroundColor = "#ff6b6b";
  }
}

// ============================================
// RESET (preserves correct/green cells)
// ============================================

function resetPuzzle() {
  if (livesRemaining <= 0) return;
  for (let r = 0; r < CONFIG.rows; r++) {
    for (let c = 0; c < CONFIG.cols; c++) {
      const input = document.querySelector(`input[data-row="${r}"][data-col="${c}"]`);
      if (!input || input.disabled || input.value === "-") continue;
      if (input.dataset.hint === 'true') continue; // never clear hint cells
      const bg = input.style.backgroundColor;
      const isCorrect = bg === 'rgb(143, 206, 0)' || bg === '#8fce00';
      if (!isCorrect) { input.value = ""; input.style.backgroundColor = ""; }
    }
  }
  const resultMessage = document.getElementById("resultMessage");
  if (resultMessage) { resultMessage.textContent = ""; resultMessage.style.backgroundColor = ""; resultMessage.style.color = ""; }
  spendLife();
  refreshHintBold(currentPuzzleKey);
}

// ============================================
// CHECK + RESET LISTENERS (clean, no stacking)
// ============================================

let checkHandler = null;
let resetHandler = null;

function attachCheckListener() {
  const checkBtn = document.getElementById("checkBtn");
  if (!checkBtn) return;
  if (checkHandler) checkBtn.removeEventListener("click", checkHandler);
  checkHandler = function () {
    const { allCorrect, allFilled } = checkAnswers();
    displayResult(allCorrect, allFilled, currentPuzzleKey);
    markSemakDone(currentPuzzleKey);
    savePuzzleState(currentPuzzleKey);
    refreshHintBold(currentPuzzleKey);
  };
  checkBtn.addEventListener("click", checkHandler);
}

function attachResetListener() {
  const resetBtn = document.getElementById("resetBtn");
  if (!resetBtn) return;
  if (resetHandler) resetBtn.removeEventListener("click", resetHandler);
  resetHandler = resetPuzzle;
  resetBtn.addEventListener("click", resetHandler);
}

// ============================================
// INIT APP
// ============================================

function initializeApp() {
  try {
    buildGrid();
    renderCrossword();
    if (currentPuzzleKey && gameSettings.hintsMode !== 'off') {
      applyHints(currentPuzzleKey, false);
    }
    attachKeyboardListener();
    attachCheckListener();
    attachResetListener();
    updateResetButtonState();
    renderLives();
  } catch (err) {
    console.error("❌ Error initializing app:", err);
  }
}

// ============================================
// PUZZLE LOADING
// ============================================

function updateClues() {
  const downClues = PUZZLE_DATA.words.filter(w => w.direction === "down");
  const acrossClues = PUZZLE_DATA.words.filter(w => w.direction === "across");
  const downDiv = document.querySelector(".clue-group:nth-child(1) > div");
  if (downDiv) downDiv.innerHTML = downClues.map(w => `<div><strong>${w.number}.</strong> ${w.clue}</div>`).join("");
  const acrossDiv = document.querySelector(".clue-group:nth-child(2) > div");
  if (acrossDiv) acrossDiv.innerHTML = acrossClues.map(w => `<div><strong>${w.number}.</strong> ${w.clue}</div>`).join("");
}

function loadPuzzle(puzzleKey, skipSave) {
  if (!PUZZLES[puzzleKey]) { console.error(`Puzzle ${puzzleKey} not found`); return; }
  if (!skipSave && currentPuzzleKey && currentPuzzleKey !== puzzleKey) {
    savePuzzleState(currentPuzzleKey);
  }
  currentPuzzleKey = puzzleKey;
  PUZZLE_DATA = PUZZLES[puzzleKey];
  const sizes = getPuzzleSize(puzzleKey);
  CONFIG.rows = sizes.rows;
  CONFIG.cols = sizes.cols;
  updateClues();
  initializeApp();
  restorePuzzleState(puzzleKey);
  refreshHintBold(puzzleKey);
  updateAllCardStatuses();
  updateFinalizeButton();
}

// ============================================
// TIMER
// ============================================

let timerInterval = null;
let remainingSeconds = 0;

function startGameTimer(minutes) {
  remainingSeconds = minutes * 60;
  stopGameTimer();
  runTimer();
}

function resumeGameTimer() {
  if (remainingSeconds <= 0) return;
  stopGameTimer();
  runTimer();
}

function runTimer() {
  const display = document.getElementById('timerDisplay');
  if (!display) return;
  function updateDisplay() {
    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (remainingSeconds <= 60) display.className = 'timer-display danger';
    else if (remainingSeconds <= 300) display.className = 'timer-display warning';
    else display.className = 'timer-display';
  }
  updateDisplay();
  timerInterval = setInterval(function () {
    remainingSeconds--;
    updateDisplay();
    if (remainingSeconds <= 0) {
      stopGameTimer();
      display.textContent = '00:00';
      handleTimeUp();
    }
  }, 1000);
}

function stopGameTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function handleTimeUp() {
  if (currentPuzzleKey) savePuzzleState(currentPuzzleKey);
  showInfoModal(
    '⏰ Time\'s Up!',
    gameSettings.gameVersion === 2 ? t().timeUpAlt : t().timeUp,
    'Okay'
  );
}

// ============================================
// MODAL HELPERS
// ============================================

function showInfoModal(title, message, btnLabel) {
  const modal = document.getElementById('infoModal');
  if (!modal) { alert(message); return; }
  document.getElementById('infoModalTitle').textContent = title;
  document.getElementById('infoModalMessage').textContent = message;
  document.getElementById('infoModalBtn').textContent = btnLabel || 'Okay';
  modal.style.display = 'flex';
}

function showConfirmModal(title, message, confirmLabel, cancelLabel, onConfirm) {
  const modal = document.getElementById('confirmActionModal');
  if (!modal) { if (confirm(message)) onConfirm(); return; }
  document.getElementById('confirmActionTitle').textContent = title;
  document.getElementById('confirmActionMessage').textContent = message;
  const yesBtn = document.getElementById('confirmActionYes');
  const noBtn = document.getElementById('confirmActionNo');
  const newYes = yesBtn.cloneNode(true);
  const newNo = noBtn.cloneNode(true);
  yesBtn.parentNode.replaceChild(newYes, yesBtn);
  noBtn.parentNode.replaceChild(newNo, noBtn);
  newYes.textContent = confirmLabel || 'Ya';
  newNo.textContent = cancelLabel || 'Cancel';
  newYes.addEventListener('click', function () { modal.style.display = 'none'; onConfirm(); });
  newNo.addEventListener('click', function () { modal.style.display = 'none'; });
  modal.style.display = 'flex';
}

// ============================================
// SETTINGS UI
// ============================================

function updateSettingsUI() {
  const timerEnabledEl = document.getElementById('timerEnabled');
  const customTimeEl = document.getElementById('customTime');
  const customTimeDisplayEl = document.getElementById('customTimeDisplay');
  const scoringEnabledEl = document.getElementById('scoringEnabled');
  const timerOptionsEl = document.getElementById('timerOptions');
  const scoringOptionsEl = document.getElementById('scoringOptions');
  const presetBtns = document.querySelectorAll('.preset-btn');
  const v1Btn = document.getElementById('versionV1Btn');
  const v2Btn = document.getElementById('versionV2Btn');

  if (timerEnabledEl) timerEnabledEl.checked = gameSettings.timerEnabled;
  if (customTimeEl) customTimeEl.value = gameSettings.timeLimit;
  if (customTimeDisplayEl) customTimeDisplayEl.textContent = gameSettings.timeLimit;
  if (scoringEnabledEl) scoringEnabledEl.checked = gameSettings.scoringEnabled;
  if (timerOptionsEl) timerOptionsEl.classList.toggle('disabled', !gameSettings.timerEnabled);
  if (scoringOptionsEl) scoringOptionsEl.classList.toggle('disabled', !gameSettings.scoringEnabled);
  presetBtns.forEach(btn => btn.classList.toggle('active', parseInt(btn.dataset.time) === gameSettings.timeLimit));
  if (v1Btn) v1Btn.classList.toggle('active', gameSettings.gameVersion === 1);
  if (v2Btn) v2Btn.classList.toggle('active', gameSettings.gameVersion === 2);

  // Hints mode buttons
  ['fixed','random','off'].forEach(mode => {
    const btn = document.getElementById('hints-' + mode);
    if (btn) btn.classList.toggle('active', gameSettings.hintsMode === mode);
  });
}

// ============================================
// DOM READY
// ============================================

document.addEventListener("DOMContentLoaded", function () {

  // --- LANDING PAGE ---
  const landingPage = document.getElementById('landingPage');
  const mainMenu = document.getElementById('mainMenu');

  // Hide main menu immediately — landing page is on top
  mainMenu.classList.remove('is-visible');

  // Trivia toggles
  document.querySelectorAll('.trivia-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
      const body = this.nextElementSibling;
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      body.style.display = expanded ? 'none' : 'block';
    });
  });

  // Start button — fade out landing, show main menu
  const landingStartBtn = document.getElementById('landingStartBtn');
  if (landingStartBtn) {
    landingStartBtn.addEventListener('click', function () {
      landingPage.classList.add('fade-out');
      mainMenu.classList.add('is-visible');
      updateContinueUI();
    });
  }
  const modifierSettings = document.getElementById('modifierSettings');
  const launcher = document.getElementById('launcher');
  const gameScreen = document.getElementById('game-screen');
  const gameMenuModal = document.getElementById('gameMenuModal');
  const abortConfirmModal = document.getElementById('abortConfirmModal');
  const infoModal = document.getElementById('infoModal');
  const confirmActionModal = document.getElementById('confirmActionModal');
  const finalScoreModal = document.getElementById('finalScoreModal');

  updateSettingsUI();
  updateContinueUI();

  // --- CONTINUE BUTTON ---
  const continueBtn = document.getElementById('continueBtn');
  if (continueBtn) {
    continueBtn.addEventListener('click', function () {
      const session = loadSession();
      if (!session) return;
      puzzleStates = session.puzzleStates || {};
      livesRemaining = session.livesRemaining ?? getMaxLives();
      currentPuzzleKey = session.currentPuzzleKey || null;
      remainingSeconds = session.remainingSeconds || 0;
      if (session.gameSettings) {
        gameSettings = { ...DEFAULT_SETTINGS, ...session.gameSettings };
        saveSettings(gameSettings);
      }
      // Restore hints state — if not saved (old session), re-generate fresh
      if (session.activeHints) {
        activeHints = session.activeHints;
        rerollCount = session.rerollCount ?? getMaxRerolls();
        maxRerolls = session.maxRerolls ?? getMaxRerolls();
      } else {
        initHints();
      }
      mainMenu.classList.remove('is-visible');
      launcher.style.display = 'flex';
      updateAllCardStatuses();
      updateFinalizeButton();
      renderLives();
      renderLauncherStatus();
      updateSettingsUI();
    });
  }

  // --- DELETE SAVE BUTTON ---
  const deleteSaveBtn = document.getElementById('deleteSaveBtn');
  if (deleteSaveBtn) {
    deleteSaveBtn.addEventListener('click', function () {
      showConfirmModal(
        t().deleteSaveTitle,
        t().deleteSave,
        t().yesDelete, 'Cancel',
        function () { clearSession(); updateContinueUI(); }
      );
    });
  }

  // --- MAIN MENU ---
  function startNewGame(goToSettings) {
    if (hasSavedSession()) {
      showConfirmModal(
        t().newGameTitle,
        t().newGameOverSave,
        t().yesDeleteContinue, 'Cancel',
        function () {
          clearSession(); updateContinueUI();
          if (goToSettings) {
            mainMenu.classList.remove('is-visible');
            modifierSettings.style.display = 'flex';
            openModifierSettings();
          } else {
            mainMenu.classList.remove('is-visible');
            launcher.style.display = 'flex';
            initLives(); initHints(); puzzleStates = {}; currentPuzzleKey = null;
            remainingSeconds = 0;
            updateAllCardStatuses(); updateFinalizeButton();
            renderLauncherStatus();
          }
        }
      );
    } else {
      if (goToSettings) {
        mainMenu.classList.remove('is-visible');
        modifierSettings.style.display = 'flex';
        openModifierSettings();
      } else {
        mainMenu.classList.remove('is-visible');
        launcher.style.display = 'flex';
        initLives(); initHints(); puzzleStates = {}; currentPuzzleKey = null;
        remainingSeconds = 0;
        updateAllCardStatuses(); updateFinalizeButton();
        renderLauncherStatus();
      }
    }
  }

  let modifierSnapshot = null;
  function openModifierSettings() {
    modifierSnapshot = JSON.parse(JSON.stringify(gameSettings));
    updateModifierDirty();
  }
  function isModifierDirty() {
    if (!modifierSnapshot) return false;
    return JSON.stringify(gameSettings) !== JSON.stringify(modifierSnapshot);
  }
  function isModifierAtDefault() {
    return JSON.stringify(gameSettings) === JSON.stringify(DEFAULT_SETTINGS);
  }
  function updateModifierDirty() {
    const btn = document.getElementById('resetToDefaultBtn');
    const banner = document.getElementById('modifierNonDefaultBanner');
    const atDefault = isModifierAtDefault();
    const dirty = isModifierDirty();
    if (btn) {
      btn.classList.toggle('has-changes', !atDefault);
      btn.disabled = atDefault;
    }
    // Banner shows when previously saved non-default (not dirty but not at default)
    if (banner) banner.style.display = (!atDefault && !dirty) ? 'flex' : 'none';
  }

  document.getElementById('quickplayBtn').addEventListener('click', function () { startNewGame(false); });
  document.getElementById('playBtn').addEventListener('click', function () { startNewGame(true); });

  document.getElementById('settingsMenuBtn').addEventListener('click', function () {
    mainMenu.classList.remove('is-visible');
    document.getElementById('tetapanScreen').style.display = 'flex';
    openTetapan();
  });

  // --- TETAPAN SCREEN ---
  const tetapanScreen = document.getElementById('tetapanScreen');
  let tetapanSnapshot = null; // snapshot of appSettings when Tetapan opens
  let tetapanDraft = null;    // working copy being edited
  let saveCountdownTimer = null;

  function snapshotSettings() {
    return JSON.parse(JSON.stringify(appSettings));
  }

  function isDirty() {
    if (!tetapanSnapshot || !tetapanDraft) return false;
    return JSON.stringify(tetapanDraft) !== JSON.stringify(tetapanSnapshot);
  }

  function openTetapan() {
    tetapanSnapshot = snapshotSettings();
    tetapanDraft = snapshotSettings();
    updateTetapanUI();
    updateTetapanButtons();
  }

  function updateTetapanUI() {
    document.getElementById('showBlockedCells').checked = tetapanDraft.showBlockedCells;
    document.getElementById('showCellBorders').checked = tetapanDraft.showCellBorders;
    document.getElementById('reduceAnimations').checked = tetapanDraft.reduceAnimations;
    document.getElementById('highContrast').checked = tetapanDraft.highContrast;
    document.getElementById('largeClueText').checked = tetapanDraft.largeClueText;
    ['Small','Normal','Large'].forEach(s => {
      const btn = document.getElementById('cellSize' + s);
      if (btn) btn.classList.toggle('active', tetapanDraft.cellSize === s.toLowerCase());
    });
    document.getElementById('langEN').classList.toggle('active', tetapanDraft.language === 'en');
    document.getElementById('langBM').classList.toggle('active', tetapanDraft.language === 'bm');
  }

  function updateTetapanButtons() {
    const dirty = isDirty();
    const atDefault = JSON.stringify(tetapanDraft) === JSON.stringify(DEFAULT_APP_SETTINGS);
    const saveBtn = document.getElementById('tetapanSaveBtn');
    const restoreBtn = document.getElementById('tetapanRestoreBtn');
    const banner = document.getElementById('tetapanNonDefaultBanner');
    if (saveBtn) saveBtn.disabled = !dirty;
    if (restoreBtn) {
      restoreBtn.classList.toggle('has-changes', !atDefault);
      restoreBtn.disabled = atDefault;
    }
    // Show banner if saved settings differ from default (on fresh open, dirty=false but atDefault=false)
    if (banner) banner.style.display = (!atDefault && !dirty) ? 'flex' : 'none';
  }

  function applyAndSaveDraft() {
    appSettings = JSON.parse(JSON.stringify(tetapanDraft));
    saveAppSettings();
    applyAppSettings();
    applyLanguage();
    tetapanSnapshot = snapshotSettings();
    updateTetapanButtons();
  }

  function closeTetapanToMenu() {
    tetapanScreen.style.display = 'none';
    mainMenu.classList.add('is-visible');
    updateContinueUI();
    applyLanguage();
  }

  // Draft toggles — update draft only, preview live, don't save yet
  function tetapanToggle(id, key) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', function () {
      tetapanDraft[key] = this.checked;
      // Live preview
      appSettings[key] = this.checked;
      applyAppSettings();
      updateTetapanButtons();
    });
  }

  tetapanToggle('showBlockedCells', 'showBlockedCells');
  tetapanToggle('showCellBorders', 'showCellBorders');
  tetapanToggle('reduceAnimations', 'reduceAnimations');
  tetapanToggle('highContrast', 'highContrast');
  tetapanToggle('largeClueText', 'largeClueText');

  ['Small','Normal','Large'].forEach(s => {
    const btn = document.getElementById('cellSize' + s);
    if (btn) btn.addEventListener('click', function () {
      tetapanDraft.cellSize = s.toLowerCase();
      appSettings.cellSize = s.toLowerCase();
      applyAppSettings();
      updateTetapanUI();
      updateTetapanButtons();
    });
  });

  document.getElementById('langEN').addEventListener('click', function () {
    tetapanDraft.language = 'en';
    appSettings.language = 'en';
    applyLanguage();
    updateTetapanUI();
    updateTetapanButtons();
  });
  document.getElementById('langBM').addEventListener('click', function () {
    tetapanDraft.language = 'bm';
    appSettings.language = 'bm';
    applyLanguage();
    updateTetapanUI();
    updateTetapanButtons();
  });

  // Save Settings button
  document.getElementById('tetapanSaveBtn').addEventListener('click', function () {
    if (!isDirty()) return;
    const isBM = tetapanDraft.language === 'bm';
    const desc = t().tetapanSaveMsg;
    document.getElementById('tetapanSaveDesc').textContent = desc;
    document.getElementById('tetapanSaveModal').style.display = 'flex';
    // Countdown
    let count = 5;
    const countEl = document.getElementById('tetapanSaveCountdown');
    countEl.textContent = count;
    clearInterval(saveCountdownTimer);
    saveCountdownTimer = setInterval(function () {
      count--;
      countEl.textContent = count;
      if (count <= 0) {
        clearInterval(saveCountdownTimer);
        document.getElementById('tetapanSaveModal').style.display = 'none';
      }
    }, 1000);
  });

  document.getElementById('tetapanSaveAccept').addEventListener('click', function () {
    clearInterval(saveCountdownTimer);
    document.getElementById('tetapanSaveModal').style.display = 'none';
    applyAndSaveDraft();
    closeTetapanToMenu();
  });

  document.getElementById('closeTetapanSaveModal').addEventListener('click', function () {
    clearInterval(saveCountdownTimer);
    document.getElementById('tetapanSaveModal').style.display = 'none';
  });

  // Restore Default button
  document.getElementById('tetapanRestoreBtn').addEventListener('click', function () {
    const atDefault = JSON.stringify(tetapanDraft) === JSON.stringify(DEFAULT_APP_SETTINGS);
    if (atDefault) return; // already at default, nothing to do

    if (isDirty()) {
      // Unsaved changes this session — restore immediately, no popup
      tetapanDraft = JSON.parse(JSON.stringify(DEFAULT_APP_SETTINGS));
      appSettings = JSON.parse(JSON.stringify(DEFAULT_APP_SETTINGS));
      applyAppSettings();
      applyLanguage();
      updateTetapanUI();
      updateTetapanButtons();
    } else {
      // Previously saved non-default settings — show confirmation popup
      document.getElementById('tetapanRestoreModalTitle').textContent = t().tetapanRestoreTitle;
      document.getElementById('tetapanRestoreModalBody').textContent = t().tetapanRestoreSaved;
      document.getElementById('tetapanRestoreConfirm').textContent = t().tetapanRestoreYes;
      document.getElementById('tetapanRestoreModal').style.display = 'flex';
    }
  });

  document.getElementById('tetapanBannerRestoreBtn')?.addEventListener('click', function () {
    document.getElementById('tetapanRestoreModalTitle').textContent = t().tetapanRestoreTitle;
    document.getElementById('tetapanRestoreModalBody').textContent = t().tetapanRestoreSaved;
    document.getElementById('tetapanRestoreConfirm').textContent = t().tetapanRestoreYes;
    document.getElementById('tetapanRestoreModal').style.display = 'flex';
  });

  document.getElementById('tetapanRestoreConfirm').addEventListener('click', function () {
    document.getElementById('tetapanRestoreModal').style.display = 'none';
    tetapanDraft = JSON.parse(JSON.stringify(DEFAULT_APP_SETTINGS));
    appSettings = JSON.parse(JSON.stringify(DEFAULT_APP_SETTINGS));
    applyAppSettings();
    applyLanguage();
    updateTetapanUI();
    updateTetapanButtons();
  });

  document.getElementById('tetapanRestoreNo')?.addEventListener('click', function () {
    document.getElementById('tetapanRestoreModal').style.display = 'none';
  });

  // Cancel / back buttons
  function tetapanCancel() {
    if (isDirty()) {
      document.getElementById('tetapanCancelDesc').textContent = t().tetapanCancelMsg;
      document.getElementById('tetapanCancelModal').style.display = 'flex';
    } else {
      // Revert live preview back to saved state
      appSettings = JSON.parse(JSON.stringify(tetapanSnapshot));
      applyAppSettings();
      applyLanguage();
      closeTetapanToMenu();
    }
  }

  document.getElementById('tetapanBackBtn').addEventListener('click', tetapanCancel);
  document.getElementById('tetapanCancelBtn').addEventListener('click', tetapanCancel);

  document.getElementById('tetapanCancelSave').addEventListener('click', function () {
    document.getElementById('tetapanCancelModal').style.display = 'none';
    applyAndSaveDraft();
    closeTetapanToMenu();
  });

  document.getElementById('tetapanCancelDiscard').addEventListener('click', function () {
    document.getElementById('tetapanCancelModal').style.display = 'none';
    appSettings = JSON.parse(JSON.stringify(tetapanSnapshot));
    applyAppSettings();
    applyLanguage();
    closeTetapanToMenu();
  });

  document.getElementById('closeTetapanCancelModal').addEventListener('click', function () {
    document.getElementById('tetapanCancelModal').style.display = 'none';
  });

  // Modifier settings back button
  function modifierCancel() {
    if (isModifierDirty()) {
      document.getElementById('modifierCancelBody').textContent = t().modifierCancelBody;
      document.getElementById('modifierCancelModal').style.display = 'flex';
    } else {
      modifierSettings.style.display = 'none';
      mainMenu.classList.add('is-visible');
      updateContinueUI();
    }
  }

  document.getElementById('modifierBackBtn').addEventListener('click', modifierCancel);
  document.getElementById('modifierCancelBtn')?.addEventListener('click', modifierCancel);

  // Cancel modal actions
  document.getElementById('modifierCancelSave').addEventListener('click', function () {
    document.getElementById('modifierCancelModal').style.display = 'none';
    saveSettings(gameSettings); // commit changes
    modifierSnapshot = JSON.parse(JSON.stringify(gameSettings));
    updateModifierDirty();
    modifierSettings.style.display = 'none';
    mainMenu.classList.add('is-visible');
    updateContinueUI();
  });
  document.getElementById('modifierCancelDiscard')?.addEventListener('click', function () {
    document.getElementById('modifierCancelModal').style.display = 'none';
    // Revert to snapshot — don't save
    gameSettings = JSON.parse(JSON.stringify(modifierSnapshot));
    updateSettingsUI();
    modifierSettings.style.display = 'none';
    mainMenu.classList.add('is-visible');
    updateContinueUI();
  });
  document.getElementById('closeModifierCancelModal').addEventListener('click', function () {
    document.getElementById('modifierCancelModal').style.display = 'none';
  });

  document.getElementById('resetAllDataBtn')?.addEventListener('click', function () {
    showConfirmModal(
      'Reset All Data',
      'This will permanently delete ALL saves, scores, and settings. Cannot be undone.',
      'Yes, Reset Everything', 'Cancel',
      function () { localStorage.clear(); location.reload(); }
    );
  });

  document.getElementById('tutorialBtn').addEventListener('click', function () {
    tutorialGoToPage(1);
    document.getElementById('tutorialModal').style.display = 'flex';
  });

  let tutorialCurrentPage = 1;
  let tutAnimTimer = null;

  function tutClearAnim() {
    if (tutAnimTimer) { clearTimeout(tutAnimTimer); tutAnimTimer = null; }
  }

  function tutFocus(el) {
    // remove any injected hint cursors
    document.querySelectorAll('#tutorialModal .tut-hint-cursor').forEach(e => e.remove());
    document.querySelectorAll('#tutorialModal .tg-focused').forEach(e => e.classList.remove('tg-focused'));
    if (el) {
      el.classList.add('tg-focused');
      if (el.classList.contains('tg-hint')) {
        const cur = document.createElement('span');
        cur.className = 'tut-hint-cursor';
        cur.textContent = '|';
        el.appendChild(cur);
      }
    }
  }

  function tutType(el, letter) {
    if (!el) return;
    el.textContent = letter;
    el.classList.add('tg-filled');
  }

  function tutClear(el) {
    if (!el) return;
    el.textContent = '';
    el.classList.remove('tg-filled');
  }

  function hd(base) { return base + Math.floor(Math.random() * 60) - 30; }

  function runAnim1() {
    tutClearAnim();
    const c = [0,1,2,3,4].map(i => document.getElementById('ta1c' + i));
    const d = [1,2,3].map(i => document.getElementById('ta1d' + i)); // TRIP rows under T (R,I,P)
    const arrowKey = document.getElementById('ta1ArrowKey');
    if (!c[0]) return;

    c.forEach(el => { if(el){ tutClear(el); el.classList.remove('tg-focused'); } });
    d.forEach(el => { if(el){ tutClear(el); el.classList.remove('tg-focused'); } });

    const seq = [
      // type KULA — but type X at A's spot by mistake
      [() => tutFocus(c[0]),             hd(130)],
      [() => tutType(c[0], 'K'),         hd(210)],
      [() => tutFocus(c[1]),             hd(100)],
      [() => tutType(c[1], 'U'),         hd(240)],
      [() => tutFocus(c[2]),             hd(100)],
      [() => tutType(c[2], 'L'),         hd(200)],
      [() => tutFocus(c[3]),             hd(100)],
      [() => tutType(c[3], 'X'),         hd(600)],  // typo — pause to let blink
      [() => {},                         hd(500)],  // blink a couple times
      // backspace X — cursor back to c[3] empty
      [() => { tutClear(c[3]); tutFocus(c[3]); },  hd(180)],
      // spammy second backspace — deletes L too
      [() => { tutClear(c[2]); tutFocus(c[2]); },  hd(350)],
      [() => {},                         hd(400)],  // pause
      // retype LA T
      [() => tutType(c[2], 'L'),         hd(180)],
      [() => tutFocus(c[3]),             hd(100)],
      [() => tutType(c[3], 'A'),         hd(210)],
      [() => tutFocus(c[4]),             hd(100)],
      [() => tutType(c[4], 'T'),         hd(700)],  // pause on T — blink a few
      [() => {},                         hd(500)],
      // show ↓ arrow key indicator
      [() => { if(arrowKey) arrowKey.style.display = 'flex'; },  hd(400)],
      // cursor moves down into TRIP column
      [() => tutFocus(d[0]),             hd(450)],
      // hide arrow key after cursor has moved and settled
      [() => { if(arrowKey) arrowKey.style.display = 'none'; },  hd(80)],
      // type RIP
      [() => tutType(d[0], 'R'),         hd(220)],
      [() => tutFocus(d[1]),             hd(100)],
      [() => tutType(d[1], 'I'),         hd(230)],
      [() => tutFocus(d[2]),             hd(100)],
      [() => tutType(d[2], 'P'),         hd(900)],  // pause at end
      // reset
      [() => {
        c.forEach(el => { if(el){ tutClear(el); el.classList.remove('tg-focused'); } });
        d.forEach(el => { if(el){ tutClear(el); el.classList.remove('tg-focused'); } });
        if(arrowKey) arrowKey.style.display = 'none';
      }, 300],
    ];

    let i = 0;
    function step() {
      if (i >= seq.length) { tutAnimTimer = setTimeout(runAnim1, 500); return; }
      const [fn, delay] = seq[i];
      fn(); i++;
      tutAnimTimer = setTimeout(step, delay);
    }
    step();
  }

  function runAnim2() {
    tutClearAnim();
    const c0 = document.getElementById('ta2c0');
    const c1 = document.getElementById('ta2c1');
    const c2 = document.getElementById('ta2c2'); // hint cell L — stays, don't clear
    const c3 = document.getElementById('ta2c3');
    const c4 = document.getElementById('ta2c4');
    if (!c0) return;
    [c0,c1,c3,c4].forEach(c => { if(c){ tutClear(c); c.classList.remove('tg-focused'); } });
    tutFocus(null);

    const seq = [
      [() => tutFocus(c0),       hd(140)],
      [() => tutType(c0, 'K'),   hd(230)],
      [() => tutFocus(c1),       hd(110)],
      [() => tutType(c1, 'U'),   hd(250)],
      [() => tutFocus(c2),       hd(200)],  // cursor enters hint cell
      [() => tutFocus(c3),       hd(110)],  // types through — hint stays
      [() => tutType(c3, 'A'),   hd(700)],  // land on A, pause
      // arrow left back through each cell
      [() => tutFocus(c3),       hd(280)],
      [() => tutFocus(c2),       hd(260)],  // enters hint cell via arrow
      [() => tutFocus(c1),       hd(260)],
      [() => tutFocus(c0),       hd(260)],
      [() => {},                 hd(700)],  // pause at K
      [() => {
        [c0,c1,c3,c4].forEach(c => { if(c){ tutClear(c); c.classList.remove('tg-focused'); } });
        tutFocus(null);
      }, 300],
    ];

    let i = 0;
    function step() {
      if (i >= seq.length) { tutAnimTimer = setTimeout(runAnim2, 400); return; }
      const [fn, delay] = seq[i];
      fn(); i++;
      tutAnimTimer = setTimeout(step, delay);
    }
    step();
  }

  function runAnim3() {
    tutClearAnim();
    const btn = document.getElementById('tutSemakBtn');
    const c0 = document.getElementById('ta3c0');
    const c2 = document.getElementById('ta3c2');
    const c3 = document.getElementById('ta3c3');
    const c4 = document.getElementById('ta3c4');
    const cursor = document.getElementById('tutMouseCursor');
    if (!c0 || !cursor) return;

    // reset colours
    [c0,c2,c3,c4].forEach(c => { if(c) c.className = 'tg-cell'; });

    const seq = [
      // cursor slides in from right toward button
      [() => { cursor.style.opacity = '1'; cursor.style.transform = 'translate(80px, 8px)'; }, 50],
      [() => { cursor.style.transform = 'translate(4px, 8px)'; }, 420],
      // small wiggle settle
      [() => { cursor.style.transform = 'translate(6px, 9px)'; }, 80],
      [() => { cursor.style.transform = 'translate(4px, 8px)'; }, 100],
      // click — button flash
      [() => { if(btn) btn.classList.add('tut-btn-click'); }, 100],
      [() => { if(btn) btn.classList.remove('tut-btn-click'); }, 80],
      // all cells light up at once
      [() => {
        if(c0) c0.className = 'tg-cell tg-correct';
        if(c2) c2.className = 'tg-cell tg-correct';
        if(c3) c3.className = 'tg-cell tg-wrong';
        if(c4) c4.className = 'tg-cell tg-empty';
      }, 1400],
      // cursor slides back right
      [() => { cursor.style.transform = 'translate(80px, 8px)'; cursor.style.opacity = '0'; }, 400],
      [() => { [c0,c2,c3,c4].forEach(c => { if(c) c.className = 'tg-cell'; }); }, 200],
    ];

    let i = 0;
    function step() {
      if (i >= seq.length) { tutAnimTimer = setTimeout(runAnim3, 600); return; }
      const [fn, delay] = seq[i];
      fn(); i++;
      tutAnimTimer = setTimeout(step, delay);
    }
    step();
  }

  function tutorialGoToPage(n) {
    tutClearAnim();
    for (let i = 1; i <= 5; i++) {
      const p = document.getElementById('tutPage' + i);
      if (p) p.style.display = i === n ? 'block' : 'none';
    }
    document.querySelectorAll('.tutorial-dot').forEach(d => {
      d.classList.toggle('tutorial-dot--active', parseInt(d.dataset.page) === n);
    });
    const prevBtn = document.getElementById('tutPrevBtn');
    const nextBtn = document.getElementById('tutNextBtn');
    const closeBtn = document.getElementById('tutCloseBtn');
    if (prevBtn) prevBtn.style.display = n === 1 ? 'none' : 'inline-flex';
    if (nextBtn) nextBtn.style.display = n === 5 ? 'none' : 'inline-flex';
    if (closeBtn) closeBtn.style.display = n === 5 ? 'inline-flex' : 'none';
    tutorialCurrentPage = n;
    if (n === 1) setTimeout(runAnim1, 400);
    if (n === 2) setTimeout(runAnim2, 400);
    if (n === 3) setTimeout(runAnim3, 400);
  }

  const tutPrevBtn = document.getElementById('tutPrevBtn');
  const tutNextBtn = document.getElementById('tutNextBtn');
  const tutCloseBtn = document.getElementById('tutCloseBtn');
  if (tutPrevBtn) tutPrevBtn.addEventListener('click', function () { tutorialGoToPage(tutorialCurrentPage - 1); });
  if (tutNextBtn) tutNextBtn.addEventListener('click', function () { tutorialGoToPage(tutorialCurrentPage + 1); });
  if (tutCloseBtn) tutCloseBtn.addEventListener('click', function () { document.getElementById('tutorialModal').style.display = 'none'; });
  document.querySelectorAll('.tutorial-dot').forEach(d => {
    d.addEventListener('click', function () { tutorialGoToPage(parseInt(this.dataset.page)); });
  });
  document.getElementById('quitMenuBtn').addEventListener('click', function () {
    const isEN = appSettings.language === 'en';
    showConfirmModal(
      isEN ? 'Thank You!' : 'Terima Kasih!',
      isEN ? 'Quitting to landing page?' : 'Pergi balik ke halaman utama?',
      isEN ? 'Yes, Quit' : 'Ya, Keluar',
      isEN ? 'Cancel' : 'Batal',
      function () {
        mainMenu.classList.remove('is-visible');
        const lp = document.getElementById('landingPage');
        lp.classList.remove('fade-out');
      }
    );
  });

  // --- SCOREBOARD ---
  document.getElementById('scoreboardBtn').addEventListener('click', function () {
    renderScoreboard();
    document.getElementById('scoreboardModal').style.display = 'flex';
  });
  const closeScoreboardBtn = document.getElementById('closeScoreboardBtn');
  if (closeScoreboardBtn) closeScoreboardBtn.addEventListener('click', function () {
    document.getElementById('scoreboardModal').style.display = 'none';
  });
  const clearScoreboardBtn = document.getElementById('clearScoreboardBtn');
  if (clearScoreboardBtn) clearScoreboardBtn.addEventListener('click', function () {
    showConfirmModal(
      t().clearScoreTitle,
      t().clearScoreboard,
      t().yesDeleteAll, 'Cancel',
      function () { clearScoreboard(); renderScoreboard(); }
    );
  });

  // --- MODIFIER SETTINGS ---
  const timerEnabledEl = document.getElementById('timerEnabled');
  if (timerEnabledEl) timerEnabledEl.addEventListener('change', function () {
    gameSettings.timerEnabled = this.checked; updateSettingsUI(); updateModifierDirty();
  });

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      gameSettings.timeLimit = parseInt(this.dataset.time);
      const ct = document.getElementById('customTime');
      if (ct) ct.value = gameSettings.timeLimit;
      updateSettingsUI(); updateModifierDirty();
    });
  });

  const customTimeEl = document.getElementById('customTime');
  if (customTimeEl) customTimeEl.addEventListener('input', function () {
    const val = parseInt(this.value);
    if (val > 0 && val <= 180) {
      gameSettings.timeLimit = val;
      const ctd = document.getElementById('customTimeDisplay');
      if (ctd) ctd.textContent = val;
      updateSettingsUI(); updateModifierDirty();
    }
  });

  const scoringEnabledEl = document.getElementById('scoringEnabled');
  if (scoringEnabledEl) scoringEnabledEl.addEventListener('change', function () {
    gameSettings.scoringEnabled = this.checked; updateSettingsUI(); updateModifierDirty();
  });

  const v1Btn = document.getElementById('versionV1Btn');
  const v2Btn = document.getElementById('versionV2Btn');
  if (v1Btn) v1Btn.addEventListener('click', function () {
    gameSettings.gameVersion = 1;
    gameSettings.hintsMode = 'fixed';
    updateSettingsUI(); updateModifierDirty();
  });
  if (v2Btn) v2Btn.addEventListener('click', function () {
    gameSettings.gameVersion = 2;
    gameSettings.hintsMode = 'random';
    updateSettingsUI(); updateModifierDirty();
  });

  // Hints mode buttons
  ['fixed','random','off'].forEach(mode => {
    const btn = document.getElementById('hints-' + mode);
    if (btn) btn.addEventListener('click', function () {
      gameSettings.hintsMode = mode;
      updateSettingsUI(); updateModifierDirty();
    });
  });

  // Reroll button
  const rerollBtn = document.getElementById('rerollBtn');
  if (rerollBtn) rerollBtn.addEventListener('click', rerollHints);

  document.getElementById('resetToDefaultBtn').addEventListener('click', function () {
    const atDefault = isModifierAtDefault();
    if (atDefault) return;

    if (isModifierDirty()) {
      // Unsaved changes this session — restore immediately
      gameSettings = resetSettingsToDefault();
      updateSettingsUI();
      modifierSnapshot = JSON.parse(JSON.stringify(gameSettings));
      updateModifierDirty();
    } else {
      // Previously saved non-default — show popup
      document.getElementById('modifierRestoreTitle').textContent = t().modifierRestoreTitle;
      document.getElementById('modifierRestoreBody').textContent = t().modifierRestoreBody;
      document.getElementById('modifierRestoreModal').style.display = 'flex';
    }
  });

  document.getElementById('modifierRestoreConfirm').addEventListener('click', function () {
    document.getElementById('modifierRestoreModal').style.display = 'none';
    gameSettings = resetSettingsToDefault();
    saveSettings(gameSettings); // commit the restore
    updateSettingsUI();
    modifierSnapshot = JSON.parse(JSON.stringify(gameSettings));
    updateModifierDirty();
  });

  document.getElementById('closeModifierRestoreModal').addEventListener('click', function () {
    document.getElementById('modifierRestoreModal').style.display = 'none';
  });

  // modifierBackBtn and modifierCancelBtn both wired to modifierCancel above

  document.getElementById('proceedToLauncherBtn').addEventListener('click', function () {
    saveSettings(gameSettings); // commit on Next
    modifierSnapshot = JSON.parse(JSON.stringify(gameSettings));
    modifierSettings.style.display = 'none'; launcher.style.display = 'flex';
    initLives(); initHints(); puzzleStates = {}; currentPuzzleKey = null;
    remainingSeconds = 0;
    updateAllCardStatuses(); updateFinalizeButton();
    renderLauncherStatus();
  });

  // Banner restore button — same as resetToDefault flow
  document.getElementById('modifierBannerRestoreBtn')?.addEventListener('click', function () {
    document.getElementById('modifierRestoreTitle').textContent = t().modifierRestoreTitle;
    document.getElementById('modifierRestoreBody').textContent = t().modifierRestoreBody;
    document.getElementById('modifierRestoreModal').style.display = 'flex';
  });

  // --- LAUNCHER ---
  // --- HOME BUTTON (launcher) ---
  document.getElementById('homeBtn').addEventListener('click', function () {
    const isBM = appSettings.language === 'bm';
    document.getElementById('homeConfirmDesc').textContent = isBM
      ? 'Anda mempunyai permainan aktif. Simpan progres sebelum keluar?'
      : 'You have an active game. Save your progress before leaving?';
    document.getElementById('homeConfirmModal').style.display = 'flex';
  });

  document.getElementById('homeSaveBtn').addEventListener('click', function () {
    document.getElementById('homeConfirmModal').style.display = 'none';
    if (currentPuzzleKey) savePuzzleState(currentPuzzleKey);
    saveSession();
    launcher.style.display = 'none';
    mainMenu.classList.add('is-visible');
    updateContinueUI();
  });

  document.getElementById('homeNoSaveBtn').addEventListener('click', function () {
    document.getElementById('homeConfirmModal').style.display = 'none';
    launcher.style.display = 'none';
    mainMenu.classList.add('is-visible');
    updateContinueUI();
  });

  document.getElementById('closeHomeConfirmBtn').addEventListener('click', function () {
    document.getElementById('homeConfirmModal').style.display = 'none';
  });

  // --- LAUNCHER SETTINGS BUTTON ---
  document.getElementById('launcherSettingsBtn').addEventListener('click', function () {
    openInGameSettings();
    document.getElementById('inGameSettingsModal').style.display = 'flex';
  });

  // --- GAME SCREEN SETTINGS BUTTON ---
  document.getElementById('gameSettingsBtn').addEventListener('click', function () {
    openInGameSettings();
    document.getElementById('inGameSettingsModal').style.display = 'flex';
  });

  document.getElementById('closeInGameSettingsBtn').addEventListener('click', function () {
    saveAppSettings(); // commit changes on close
    document.getElementById('inGameSettingsModal').style.display = 'none';
  });

  // In-game settings sync and apply immediately
  function openInGameSettings() {
    document.getElementById('ig_showBlockedCells').checked = appSettings.showBlockedCells;
    document.getElementById('ig_showCellBorders').checked = appSettings.showCellBorders;
    document.getElementById('ig_highContrast').checked = appSettings.highContrast;
    document.getElementById('ig_largeClueText').checked = appSettings.largeClueText;
    document.getElementById('ig_reduceAnimations').checked = appSettings.reduceAnimations;
    ['Small','Normal','Large'].forEach(s => {
      const btn = document.getElementById('ig_cellSize' + s);
      if (btn) btn.classList.toggle('active', appSettings.cellSize === s.toLowerCase());
    });
  }

  function igToggle(id, key) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', function () {
      appSettings[key] = this.checked;
      applyAppSettings(); // live preview only, no save yet
    });
  }

  igToggle('ig_showBlockedCells', 'showBlockedCells');
  igToggle('ig_showCellBorders', 'showCellBorders');
  igToggle('ig_highContrast', 'highContrast');
  igToggle('ig_largeClueText', 'largeClueText');
  igToggle('ig_reduceAnimations', 'reduceAnimations');

  ['Small','Normal','Large'].forEach(s => {
    const btn = document.getElementById('ig_cellSize' + s);
    if (btn) btn.addEventListener('click', function () {
      appSettings.cellSize = s.toLowerCase();
      applyAppSettings(); // live preview only
      openInGameSettings();
    });
  });

  const finalizeBtn = document.getElementById('finalizeBtn');
  if (finalizeBtn) finalizeBtn.addEventListener('click', handleFinalize);

  document.querySelectorAll('.puzzle-card').forEach(card => {
    card.addEventListener('click', function () {
      const puzzleKey = this.dataset.puzzle;
      launcher.style.display = 'none';
      gameScreen.style.display = 'block';
      loadPuzzle(puzzleKey);
      const ps = document.getElementById('puzzleSelect');
      if (ps) ps.value = puzzleKey;
      if (gameSettings.timerEnabled) {
        if (remainingSeconds > 0) resumeGameTimer();
        else startGameTimer(gameSettings.timeLimit);
      } else {
        const td = document.getElementById('timerDisplay');
        if (td) { td.textContent = '∞'; td.className = 'timer-display timer-display--nolimit'; }
      }
    });
  });

  // --- GAME SCREEN ---
  const backToLauncherBtn = document.getElementById('backToLauncher');
  if (backToLauncherBtn) backToLauncherBtn.addEventListener('click', function () {
    if (currentPuzzleKey) savePuzzleState(currentPuzzleKey);
    stopGameTimer();
    gameScreen.style.display = 'none';
    launcher.style.display = 'flex';
    updateAllCardStatuses(); updateFinalizeButton();
    renderLauncherStatus();
  });

  const puzzleSelect = document.getElementById('puzzleSelect');
  if (puzzleSelect) puzzleSelect.addEventListener('change', function (e) { loadPuzzle(e.target.value); });

  // --- GAME MENU MODAL ---
  document.getElementById('resumeGameBtn').addEventListener('click', function () { gameMenuModal.style.display = 'none'; });
  document.getElementById('settingsBtn').addEventListener('click', function () { console.log('In-game settings — TODO'); });
  document.getElementById('quitGameBtn').addEventListener('click', function () {
    gameMenuModal.style.display = 'none'; abortConfirmModal.style.display = 'flex';
  });

  // --- ABORT ---
  document.getElementById('confirmAbortBtn').addEventListener('click', function () {
    if (currentPuzzleKey) savePuzzleState(currentPuzzleKey);
    stopGameTimer();
    abortConfirmModal.style.display = 'none';
    gameMenuModal.style.display = 'none';

    function exitToMenu(shouldSave) {
      if (shouldSave) {
        saveSession();
        updateContinueUI();
      } else {
        clearSession();
        updateContinueUI();
      }
      launcher.style.display = 'none';
      gameScreen.style.display = 'none';
      puzzleStates = {}; currentPuzzleKey = null; remainingSeconds = 0;
      mainMenu.classList.add('is-visible');
      updateContinueUI();
    }

    showConfirmModal(
      'Simpan Progres?',
      t().saveBeforeQuit,
      'Ya, Simpan', 'Tidak, Buang',
      function () { exitToMenu(true); }
    );

    // Override the No button to also navigate (showConfirmModal only wires Yes)
    setTimeout(function () {
      const noBtn = document.getElementById('confirmActionNo');
      if (noBtn) {
        noBtn.addEventListener('click', function () { exitToMenu(false); });
      }
    }, 10);
  });

  document.getElementById('cancelAbortBtn').addEventListener('click', function () { abortConfirmModal.style.display = 'none'; });

  // --- INFO MODAL ---
  const infoModalBtn = document.getElementById('infoModalBtn');
  if (infoModalBtn) infoModalBtn.addEventListener('click', function () { infoModal.style.display = 'none'; });

  // --- FINAL SCORE MODAL ---
  const closeFinalBtn = document.getElementById('closeFinalBtn');
  if (closeFinalBtn) closeFinalBtn.addEventListener('click', function () { finalScoreModal.style.display = 'none'; });

  const backToMenuFromFinalBtn = document.getElementById('backToMenuFromFinalBtn');
  if (backToMenuFromFinalBtn) backToMenuFromFinalBtn.addEventListener('click', function () {
    finalScoreModal.style.display = 'none';
    launcher.style.display = 'none';
    stopGameTimer(); remainingSeconds = 0;
    puzzleStates = {}; currentPuzzleKey = null;
    mainMenu.classList.add('is-visible');
    updateContinueUI();
  });

  // --- INIT SCREEN STATES ---
  // mainMenu starts hidden — landing page covers everything, Mula shows it with fadeIn
  mainMenu.classList.remove('is-visible');
  modifierSettings.style.display = 'none';
  launcher.style.display = 'none';
  gameScreen.style.display = 'none';
  document.getElementById('tetapanScreen').style.display = 'none';
  gameMenuModal.style.display = 'none';
  abortConfirmModal.style.display = 'none';
  if (infoModal) infoModal.style.display = 'none';
  if (confirmActionModal) confirmActionModal.style.display = 'none';
  if (finalScoreModal) finalScoreModal.style.display = 'none';
  const scoreboardModal = document.getElementById('scoreboardModal');
  if (scoreboardModal) scoreboardModal.style.display = 'none';
  const tutorialModal = document.getElementById('tutorialModal');
  if (tutorialModal) tutorialModal.style.display = 'none';
  const homeConfirmModal = document.getElementById('homeConfirmModal');
  if (homeConfirmModal) homeConfirmModal.style.display = 'none';
  const inGameSettingsModal = document.getElementById('inGameSettingsModal');
  if (inGameSettingsModal) inGameSettingsModal.style.display = 'none';

  // Apply saved app settings and language on startup
  applyAppSettings();
  applyLanguage();

  // Attach reset hover effects and icon tooltips
  attachResetHoverEffects();
  attachIconTooltips();

  // --- MODAL X CLOSE BUTTONS ---
  const xMap = {
    'closeGameMenuBtn':        () => { gameMenuModal.style.display = 'none'; },
    'closeAbortBtn':           () => { abortConfirmModal.style.display = 'none'; },
    'closeInfoBtn':            () => { infoModal.style.display = 'none'; },
    'closeConfirmActionBtn':   () => { confirmActionModal.style.display = 'none'; },
    'closeFinalXBtn':          () => { finalScoreModal.style.display = 'none'; },
    'closeScoreboardXBtn':     () => { document.getElementById('scoreboardModal').style.display = 'none'; },
    'closeTutorialXBtn':       () => { document.getElementById('tutorialModal').style.display = 'none'; tutClearAnim(); },
    'closeHomeConfirmBtn':       () => { document.getElementById('homeConfirmModal').style.display = 'none'; },
    'closeInGameSettingsBtn':    () => { saveAppSettings(); document.getElementById('inGameSettingsModal').style.display = 'none'; },
    'closeModifierRestoreModal': () => { document.getElementById('modifierRestoreModal').style.display = 'none'; },
    'closeModifierCancelModal':  () => { document.getElementById('modifierCancelModal').style.display = 'none'; },
    'closeTetapanRestoreModal':  () => { document.getElementById('tetapanRestoreModal').style.display = 'none'; },
  };
  Object.entries(xMap).forEach(([id, fn]) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', fn);
  });
});