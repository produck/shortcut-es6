export const
	DIGIT_0 = 0x00,
	DIGIT_1 = 0x01,
	DIGIT_2 = 0x02,
	DIGIT_3 = 0x03,
	DIGIT_4 = 0x04,
	DIGIT_5 = 0x05,
	DIGIT_6 = 0x06,
	DIGIT_7 = 0x07,
	DIGIT_8 = 0x08,
	DIGIT_9 = 0x09,

	MINUS = 0x0A,
	EQUAL = 0x0B,

	KeyA = 0x10,
	KeyB = 0x11,
	KeyC = 0x12,
	KeyD = 0x13,
	KeyE = 0x14,
	KeyF = 0x15,
	KeyG = 0x16,
	KeyH = 0x17,
	KeyI = 0x18,
	KeyJ = 0x19,
	KeyK = 0x1A,
	KeyL = 0x1B,
	KeyM = 0x1C,
	KeyN = 0x1D,
	KeyO = 0x1E,
	KeyP = 0x1F,
	KeyQ = 0x20,
	KeyR = 0x21,
	KeyS = 0x22,
	KeyT = 0x23,
	KeyU = 0x24,
	KeyV = 0x25,
	KeyW = 0x26,
	KeyX = 0x27,
	KeyY = 0x28,
	KeyZ = 0x29,

	Quote =        0x30,
	Backquote =    0x31,
	Slash =        0x32,
	Backslash =    0x33,
	Comma =        0x34,
	Period =       0x35,
	Semicolon =    0x36,
	BracketLeft =  0x37,
	BracketRight = 0x38,

	Enter =        0x39,
	Space =        0x3A,
	Backspace =    0x3B,
	Tab =          0x3C,

	F1 =  0x40,
	F2 =  0x41,
	F3 =  0x42,
	F4 =  0x43,
	F5 =  0x44,
	F6 =  0x45,
	F7 =  0x46,
	F8 =  0x47,
	F9 =  0x48,
	F10 = 0x49,
	F11 = 0x4A,
	F12 = 0x4B,

	Numpad0 = 0x50,
	Numpad1 = 0x51,
	Numpad2 = 0x52,
	Numpad3 = 0x53,
	Numpad4 = 0x54,
	Numpad5 = 0x55,
	Numpad6 = 0x56,
	Numpad7 = 0x57,
	Numpad8 = 0x58,
	Numpad9 = 0x59,
	NumpadDecimal =  0x5A,
	NumpadAdd =      0x5B,
	NumpadSubtract = 0x5C,
	NumpadMultiply = 0x5D,
	NumpadDivide =   0x5E,
	NumpadEnter =    0x5F,

	ArrowUp =    0x61,
	ArrowDown =  0x62,
	ArrowLeft =  0x63,
	ArrowRight = 0x64,

	Escape =     0x81,
	Pause =      0x82,
	PageUp =     0x83,
	PageDown =   0x84,
	Home =       0x85,
	End =        0x86,
	Insert =     0x87,
	Delete =     0x88,
	ContextMenu =   0x89,

	NumLock = 0xA1,
	CapsLock =   0xA2,
	ScrollLock = 0xA3;

export const isModifier = code => Boolean(0b1111000000000000 & code);