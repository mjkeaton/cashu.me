export default {
  global: {
    copy_to_clipboard: {
      success: "Copied to clipboard!",
    },
    actions: {
      paste: {
        label: "Paste",
      },
      close: {
        label: "Close",
      },
      scan: {
        label: "Scan",
      },
    },
  },
  MainHeader: {
    menu: {
      settings: {
        title: "Settings",
        settings: {
          title: "Settings",
          caption: "Wallet configuration",
        },
      },
      terms: {
        title: "Terms",
        terms: {
          title: "Terms",
          caption: "Terms of Service",
        },
      },
      links: {
        title: "Links",
        cashuSpace: {
          title: "Cashu.space",
          caption: "cashu.space",
        },
        github: {
          title: "Github",
          caption: "github.com/cashubtc",
        },
        telegram: {
          title: "Telegram",
          caption: "t.me/CashuMe",
        },
        twitter: {
          title: "Twitter",
          caption: "{'@'}CashuBTC",
        },
        donate: {
          title: "Donate",
          caption: "Support Cashu",
        },
      },
    },
    offline: {
      warning: {
        text: "Offline",
      },
    },
    reload: {
      warning: {
        text: "Reload in { countdown }",
      },
    },
    staging: {
      warning: {
        text: "Staging – don't use with real funds!",
      },
    },
  },
  FullscreenHeader: {
    actions: {
      back: {
        label: "Wallet",
      },
    },
  },
  Settings: {
    language: {
      title: "Language",
      description: "Please choose your preferred language from the list below.",
    },
  },
  NoMintWarnBanner: {
    title: "Join a mint",
    subtitle:
      "You haven't joined any Cashu mint yet. Add a mint URL in the settings or receive ecash from a new mint to get started.",
    actions: {
      addMint: {
        label: "Add mint",
      },
      receive: {
        label: "Receive Ecash",
      },
    },
  },
  WalletPage: {
    actions: {
      send: {
        label: "Send",
      },
      receive: {
        label: "Receive",
      },
    },
    tabs: {
      history: {
        label: "History",
      },
      invoices: {
        label: "Invoices",
      },
      mints: {
        label: "Mints",
      },
    },
    install: {
      text: "Install",
      tooltip: "Install Cashu",
    },
  },
  AlreadyRunning: {
    title: "Nope.",
    text: "Another tab is already running. Close this tab and try again.",
    actions: {
      retry: {
        label: "Retry",
      },
    },
  },
  ErrorNotFound: {
    title: "404",
    text: "Oops. Nothing here…",
    actions: {
      home: {
        label: "Go back home",
      },
    },
  },
  BalanceView: {
    mintUrl: {
      label: "Mint",
    },
    mintBalance: {
      label: "Balance",
    },
    mintError: {
      label: "Mint error",
    },
    pending: {
      label: "Pending",
      tooltip: "Check all pending tokens",
    },
  },
  WelcomePage: {
    actions: {
      previous: {
        label: "Previous",
      },
      next: {
        label: "Next",
      },
    },
  },
  WelcomeSlide1: {
    title: "Welcome to Cashu",
    text: "Cashu.me is a free and open-source Bitcoin wallet that uses ecash to keep your funds secure and private.",
    actions: {
      more: {
        label: "Click to learn more",
      },
    },
    p1: {
      text: "Cashu is a free and open-source ecash protocol for Bitcoin. You can learn more about it at { link }.",
      link: {
        text: "cashu.space",
      },
    },
    p2: {
      text: "This wallet is not affiliated with any mint. To use this wallet, you need to connect to one or more Cashu mints that you trust.",
    },
    p3: {
      text: "This wallet stores ecash that only you have access to. If you delete your browser data without a seed phrase backup, you will lose your tokens.",
    },
    p4: {
      text: "This wallet is in beta. We hold no responsibility for people losing access to funds. Use at your own risk! This code is open-source and licensed under the MIT license.",
    },
  },
  WelcomeSlide2: {
    title: "Install PWA",
    instruction: {
      intro: {
        text: "For the best experience, use this wallet with your device's native web browser to install it as a Progressive Web App. Do this right now.",
      },
      android: {
        title: "Android (Chrome)",
        step1: {
          item: "1. { icon } { text }",
          text: "Tap the menu (top right)",
        },
        step2: {
          item: "2. { icon } { text }",
          text: "Press { buttonText }",
          buttonText: "@:AndroidPWAPrompt.buttonText",
        },
      },
      ios: {
        title: "iOS (Safari)",
        step1: {
          item: "1. { icon } { text }",
          text: "Tap share (bottom)",
        },
        step2: {
          item: "2. { icon } { text }",
          text: "Press { buttonText }",
          buttonText: "@:iOSPWAPrompt.buttonText",
        },
      },
      outro: {
        text: "Once you installed this app on your device, close this browser window and use the app from your home screen.",
      },
    },
    pwa: {
      success: {
        title: "Success!",
        text: "You are using Cashu as a PWA. Close any other open browser windows and use the app from your home screen.",
      },
    },
  },
  iOSPWAPrompt: {
    text: "Tap { icon } and { buttonText }",
    buttonText: "Add to Home Screen",
  },
  AndroidPWAPrompt: {
    text: "Tap { icon } and { buttonText }",
    buttonText: "Add to Home Screen",
  },
  WelcomeSlide3: {
    title: "Your Seed Phrase",
    text: "Store your seed phrase in a password manager or on paper. Your seed phrase is the only way to recover your funds if you lose access to this device.",
    inputs: {
      seed_phrase: {
        label: "Seed Phrase",
        caption: "You can see your seed phrase in the settings.",
      },
      checkbox: {
        label: "I have written it down",
      },
    },
  },
  WelcomeSlide4: {
    title: "Terms",
    actions: {
      more: {
        label: "Read Terms of Service",
      },
    },
    inputs: {
      checkbox: {
        label: "I've read and accept these terms and conditions",
      },
    },
  },
  RestoreView: {
    seed_phrase: {
      label: "Restore from Seed Phrase",
      caption:
        "Enter your seed phrase to restore your wallet. Before you restore, make sure you have added all the mints that you have used before.",
      inputs: {
        seed_phrase: {
          label: "Seed phrase",
          caption: "You can see your seed phrase in the settings.",
        },
      },
    },
    information: {
      label: "Information",
      caption:
        "The wizard will only restore ecash from another seed phrase, you will not be able to use this seed phrase or change the seed phrase of the wallet that you're currently using. This means that restored ecash will not be protected by your current seed phrase as long as you don't send the ecash to yourself once.",
    },
    restore_mints: {
      label: "Restore Mints",
      caption:
        'Select the mint to restore. You can add more mints in the main screen under "Mints" and restore them here.',
    },
    actions: {
      paste: {
        error: "Failed to read clipboard contents.",
      },
      validate: {
        error: "Mnemonic should be at least 12 words.",
      },
      restore: {
        label: "Restore",
        in_progress: "Restoring mint …",
        error: "Error restoring mint: { error }",
      },
      restore_all_mints: {
        label: "Restore All Mints",
        in_progress: "Restoring mint { index } of { length } …",
        success: "Restore finished successfully",
        error: "Error restoring mints: { error }",
      },
    },
  },
  MintSettings: {
    add: {
      title: "Add mint",
      description:
        "Enter the URL of a Cashu mint to connect to it. This wallet is not affiliated with any mint.",
      inputs: {
        nickname: {
          placeholder: "Nickname (e.g. Testnet)",
        },
      },
      actions: {
        add: {
          label: "Add mint",
          error_invalid_url: "Invalid URL",
        },
        scan: {
          label: "Scan QR Code",
        },
      },
    },
    discover: {
      title: "Discover mints",
      overline: "Discover",
      caption: "Discover mints other users have recommended on nostr.",
      actions: {
        discover: {
          label: "Discover mints",
          in_progress: "Loading…",
          error_no_mints: "No mints found",
          success: "Found { length } mints",
        },
      },
      recommendations: {
        overline: "Found { length } mints",
        caption:
          "These mints were recommended by other Nostr users. Read reviews at { link }. Be careful and do your own research before using a mint.",
        actions: {
          browse: {
            label: "Click to browse mints",
          },
        },
      },
    },
    swap: {
      title: "Swap",
      overline: "Multimint Swaps",
      caption:
        "Swap funds between mints via Lightning. Note: Leave room for potential Lightning fees. If the incoming payment does not succeed, check the invoice manually.",
      inputs: {
        from: {
          label: "From",
        },
        to: {
          label: "To",
        },
        amount: {
          label: "Amount ({ ticker }))",
        },
      },
      actions: {
        swap: {
          label: "Swap",
          in_progress: "Swap",
        },
      },
    },
  },
  QrcodeReader: {
    progress: {
      text: "{ percentage }{ addon }",
      percentage: "{ percentage }%",
      keep_scanning_text: " - Keep scanning",
    },
    actions: {
      paste: {
        label: "@:global.actions.paste.label",
      },
      close: {
        label: "@:global.actions.close.label",
      },
    },
  },
  SendDialog: {
    title: "Send",
    actions: {
      ecash: {
        label: "Ecash",
        error_no_mints: "No mints available",
      },
      lightning: {
        label: "Lightning",
        error_no_mints: "No mints available",
      },
    },
  },
  ReceiveDialog: {
    title: "Receive",
    actions: {
      ecash: {
        label: "Ecash",
        error_no_mints: "No mints available",
      },
      lightning: {
        label: "Lightning",
        error_no_mints:
          "You need to connect to a mint to receive via Lightning",
      },
    },
  },
  ReceiveEcashDrawer: {
    title: "Receive Ecash",
    actions: {
      paste: {
        label: "@:global.actions.paste.label",
      },
      scan: {
        label: "@:global.actions.scan.label",
      },
      request: {
        label: "Request",
      },
      lock: {
        label: "Lock",
      },
      nfc: {
        label: "NFC",
        scanning_text: "Scanning…",
      },
    },
  },
  ReceiveTokenDialog: {
    title: "Receive { value }",
    title_ecash_text: "Ecash",
    inputs: {
      tokensBase64: {
        label: "Paste Cashu token",
      },
    },
    errors: {
      invalid_token: {
        label: "Invalid token",
      },
    },
    actions: {
      paste: {
        label: "@:global.actions.paste.label",
      },
      close: {
        label: "@:global.actions.close.label",
      },
      scan: {
        label: "@:global.actions.scan.label",
      },
      receive: {
        label: "Receive",
        label_known_mint: "@:ReceiveTokenDialog.actions.receive.label",
        label_adding_mint: "Adding mint…",
      },
      swap: {
        label: "Swap",
        tooltip_text: "Swap to a trusted mint",
        caption: "Swap { value }",
      },
      cancel_swap: {
        label: "Cancel",
        tooltip_text: "Cancel swap",
      },
      confirm_swap: {
        label: "@:ReceiveTokenDialog.actions.swap.label",
        tooltip_text: "@:ReceiveTokenDialog.actions.swap.tooltip_text",
        in_progress: "@:ReceiveTokenDialog.actions.confirm_swap.label",
      },
      later: {
        label: "Later",
        tooltip_text: "Add to history to receive later",
        already_in_history_success_text: "Ecash already in History",
        added_to_history_success_text: "Ecash added to History",
      },
      nfc: {
        label: "NFC",
        tooltips: {
          ndef_supported_text: "Read from NFC card",
          ndef_unsupported_text: "NDEF unsupported",
        },
      },
    },
  },
  restore: {
    mnemonic_error_text: "Please enter a mnemonic",
    restore_mint_error_text: "Error restoring mint: { error }",
    prepare_info_text: "Preparing restore process …",
    restored_proofs_for_keyset_info_text:
      "Restored { restoreCounter } proofs for keyset { keysetId }",
    checking_proofs_for_keyset_info_text:
      "Checking proofs { startIndex } to { endIndex } for keyset { keysetId }",
    no_proofs_info_text: "No proofs found to restore",
    restored_amount_success_text: "Restored { amount }",
  },
  swap: {
    in_progress_warning_text: "Swap in progress",
    invalid_swap_data_error_text: "Invalid swap data",
    swap_error_text: "Error swapping",
  },
};
