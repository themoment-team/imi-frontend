'use client';

import { useState } from 'react';

import SignUpOnePage from './stepOne';
import SignUpTwoPage from './stepTwo';

export default function SignUpPage() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({ email: '', password: '' });

  return step === 1 ? (
    <SignUpOnePage
      formData={formData}
      setFormData={setFormData}
      onNext={() => setStep(2)}
    />
  ) : (
    <SignUpTwoPage formData={formData} onPrev={() => setStep(1)} />
  );
}
