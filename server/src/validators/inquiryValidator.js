const allowedModes = new Set(['Online', 'Offline', 'Hybrid']);

export function validateInquiry(body) {
  const errors = {};
  const requiredFields = [
    'studentName',
    'email',
    'programInterest',
    'preferredLocation',
    'learningMode'
  ];

  requiredFields.forEach((field) => {
    if (!body[field] || String(body[field]).trim() === '') {
      errors[field] = 'This field is required.';
    }
  });

  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (body.learningMode && !allowedModes.has(body.learningMode)) {
    errors.learningMode = 'Choose Online, Offline, or Hybrid.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    value: {
      studentName: body.studentName?.trim(),
      parentName: body.parentName?.trim() || null,
      email: body.email?.trim(),
      phone: body.phone?.trim() || null,
      programInterest: body.programInterest?.trim(),
      preferredLocation: body.preferredLocation?.trim(),
      learningMode: body.learningMode,
      message: body.message?.trim() || null
    }
  };
}
