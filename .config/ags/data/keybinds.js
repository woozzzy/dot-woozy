 export const keybindList = [
	[
		{
			icon: 'pin_drop',
			name: 'Hyprland - Workspaces',
			binds: [
				{ keys: ['', '+', '(Scroll ↑↓)'], action: 'Go to workspace -1/+1' },
				{ keys: ['', '+', '#'], action: 'Go to workspace #' },
				{ keys: ['', '+', '`'], action: 'Toggle special workspace' },
				{ keys: ['', 'Shift', '+', '#'], action: 'Move window to workspace #' },
				{ keys: ['', 'Shift', '+', '`'], action: 'Move window to special workspace' },
			],
			appeartick: 1,
		},
		{
			icon: 'overview_key',
			name: 'Hyprland - Windows',
			binds: [
				{ keys: ['', '+', 'F'], action: 'Fullscreen' },
				{ keys: ['', '+', 'W'], action: 'Toggle Floating' },
				{ keys: ['', 'Shift', '+', '←↑→↓'], action: 'Tile Windows (Floating)' },
				{ keys: ['', 'Shift', '+', 'C'], action: 'Center Windows (Floating)' },
				{ keys: ['', '+', '←↑→↓', 'OR', 'Alt', '+', 'Tab'], action: 'Focus Windows' },
				{ keys: ['', 'Alt', '+', '←↑→↓'], action: 'Swap Windows' },
				{ keys: ['', 'Ctrl', 'Shift', '+', '+-'], action: 'Split Ratio +-' },
				{ keys: ['', 'Ctrl', 'Shift', '+', 'Backspace'], action: 'Split Ratio=0.5' },
			],
			appeartick: 1,
		},
		{
			icon: 'space_dashboard',
			name: 'Hyprland - Layout',
			binds: [
				{ keys: ['', '+', '.'], action: 'Toggle Layout' },
				{ keys: ['', '+', 'W'], action: 'Swap with Master (Master Only)' },
				{ keys: ['', '+', 'W'], action: 'Toggle Split (Dwindle Only)' },
				{ keys: ['', 'Shift', '+', 'W'], action: 'Toggle Psuedo (Dwindle Only)' },
			],
			appeartick: 1,
		},
	],
	[
		{
			icon: 'apps',
			name: 'Apps',
			binds: [
				{ keys: ['', '+', 'Return'], action: 'Foot' },
				{ keys: ['', '+', 'G'], action: 'Chrome' },
				{ keys: ['', '+', 'E'], action: 'Thunar' },
				{ keys: ['', 'Shift', '+', 'Space'], action: 'Fuzzel' },
				{ keys: ['', '+', 'I'], action: 'GNOME Control center' },
				{ keys: ['', 'Shift', '+', 'I'], action: 'Pulse Audio Settings' },
			],
			appeartick: 2,
		},
		{
			icon: 'construction',
			name: 'Utilities',
			binds: [
				{ keys: ['Print'], action: 'Screenshot to Clipboard' },
				{ keys: ['', '+', 'Print'], action: 'Record Screen' },
				{ keys: ['', 'Ctrl', '+', 'P'], action: 'Color Picker' },
				{ keys: ['', 'Shift', '+', 'P'], action: 'Emoji Picker' },
				{ keys: ['', 'Shift', '+', 'V'], action: 'Clipboard History' },
			],
			appeartick: 2,
		},
		{
			icon: 'settings',
			name: 'System',
			binds: [
				{ keys: ['', '+', 'Q'], action: 'Kill Active' },
				{ keys: ['', 'Shift', '+', 'Q'], action: 'Power/Session Menu' },
				{ keys: ['', 'Ctrl', '+', 'R'], action: 'Restart AGS' },
				{ keys: ['', 'Alt', '+', 'R'], action: 'Restart Hyprland' },
				{ keys: ['', 'Ctrl', 'Shift', '+', 'Delete'], action: 'Exit Hyprland' },
				{ keys: ['', 'Alt', '+', '.'], action: 'Dotfiles (VSCode)' },
			],
			appeartick: 2,
		},
	],
	[
		{
			icon: 'widgets',
			name: 'AGS - Widgets',
			binds: [
				{ keys: ['', '+', 'Tab', 'OR', 'Space'], action: 'Overview/Launcher' },
				{ keys: ['', '+', 'Home'], action: 'System Sidebar' },
				{ keys: ['', '+', 'End'], action: 'Utility Sidebar' },
				{ keys: ['', '+', '/'], action: 'Cheatsheet' },
				{ keys: ['', 'Shift', '+', '/'], action: 'Vimsheet' },
				{ keys: ['', 'Alt', '+', '/'], action: 'On-Scren Keyboard' },
			],
			appeartick: 3,
		},
		{
			icon: 'terminal',
			name: 'AGS - Launcher Actions',
			binds: [
				{ keys: ['>raw'], action: 'Toggle mouse acceleration' },
				{ keys: ['>img'], action: 'Select wallpaper and generate colorscheme' },
				{ keys: ['>light'], action: 'Switch to light theme' },
				{ keys: ['>dark'], action: 'Switch to dark theme' },
				{ keys: ['>color'], action: 'Pick acccent color' },
				{ keys: ['>todo'], action: 'Type something after that to add a To-do item' },
			],
			appeartick: 3,
		},
	],
];
