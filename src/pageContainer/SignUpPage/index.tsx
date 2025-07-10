'use client';

import { useState } from 'react';

import SignUpOnePage from './stepOne';
import SignUpTwoPage from './stepTwo';

export default function SignUpPage() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    authCode: '',
  });

  const [authIsOpen, setAuthIsOpen] = useState<boolean>(false);

  const [authBtn, setAuthBtn] = useState<boolean>(false);
  const [emailAuth, setEmailAuth] = useState<boolean>(false);

  const [authStack, setAuthStack] = useState<number>(0);

  const [blockTime, setBlockTime] = useState<string>('');
  const [isBlock, setIsBlock] = useState<boolean>(false);

  return step === 1 ? (
    <SignUpOnePage
      formData={formData}
      setFormData={setFormData}
      onNext={() => setStep(2)}
      authIsOpen={authIsOpen}
      setAuthIsOpen={setAuthIsOpen}
      authBtn={authBtn}
      setAuthBtn={setAuthBtn}
      emailAuth={emailAuth}
      setEmailAuth={setEmailAuth}
      authStack={authStack}
      setAuthStack={setAuthStack}
      blockTime={blockTime}
      setBlockTime={setBlockTime}
      isBlock={isBlock}
      setIsBlock={setIsBlock}
    />
  ) : (
    <SignUpTwoPage formData={formData} onPrev={() => setStep(1)} />
  );
}
