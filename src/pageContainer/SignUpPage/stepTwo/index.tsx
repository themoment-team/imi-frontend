'use client';

import { useRouter } from 'next/navigation';

import { ImiLogo } from '@/asset';

import { FieldErrors, useForm } from 'react-hook-form';

import * as S from './signUpTwo.css';

type FormValues = {
  name: string;
  gradeNumber: string;
};

type SignUpTwoPageProps = {
  formData: { email: string; password: string };
  onPrev: () => void;
};

const SignUpTwoPage = ({ formData, onPrev }: SignUpTwoPageProps) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    clearErrors,
    watch,
  } = useForm<FormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit = (data: FormValues) => {
    console.log(data, formData);
    router.push('/signin');
  };

  const allFieldsFilled = Object.values(watch()).every((value) => value !== '');

  const onError = (errors: FieldErrors) => {
    console.error(errors);
  };

  const ClearError = () => {
    clearErrors('name');
    clearErrors('gradeNumber');
  };

  const GoPrev = () => {
    if (confirm('이동하면 현재 작성한 정보가 저장되지 않을 수 있습니다')) {
      onPrev();
    }
  };

  return (
    <div className={S.SignUpContainer}>
      <div className={S.LogoContainer}>
        <ImiLogo width="4.125rem" height="3rem" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={S.InputContainer}
      >
        <div className={S.InputNameContainer}>
          <p className={S.Text}>Name</p>
          <div
            className={
              errors.name
                ? S.inputNameVariants.error
                : S.inputNameVariants.default
            }
          >
            <input
              placeholder="이름을 입력해주세요"
              className={S.InputBox}
              onClick={() => ClearError()}
              {...register('name', {
                validate: (value) => {
                  if (value.length === 0) {
                    return undefined;
                  }
                  if (value.length > 0) {
                    return true;
                  }
                  return '';
                },
              })}
            />
          </div>
          <div className={S.ErrorBox}>
            <div></div>
            {errors.name && (
              <p className={S.ErrorText}>{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className={S.InputGradeNumberContainer}>
          <p className={S.Text}>Grade</p>
          <div
            key={'gradeNumber'}
            className={
              errors.gradeNumber
                ? S.inputGradeNumberVariants.error
                : S.inputGradeNumberVariants.default
            }
          >
            <input
              placeholder="학번을 입력해주세요. ex) 2215"
              className={S.InputBox}
              onClick={() => ClearError()}
              {...register('gradeNumber', {
                validate: (value) => {
                  if (value.length === 0) {
                    return undefined;
                  }
                  if (/^\d{4}$/.test(value) && value.length === 4) {
                    return true;
                  }
                  return '학번 형식이 올바르지 않습니다.';
                },
              })}
            />
          </div>
          <div className={S.ErrorBox}>
            <div></div>
            {errors.gradeNumber && (
              <p className={S.ErrorText}>{errors.gradeNumber.message}</p>
            )}
          </div>
        </div>
        <div className={S.BtnWrapper}>
          <button type="button" onClick={GoPrev} className={S.PrevBtn}>
            이전
          </button>
          <button
            type="submit"
            className={
              isValid && allFieldsFilled ? S.SignUpBtn : S.BlockSignUpBtn
            }
            disabled={
              !isValid || !allFieldsFilled || Object.keys(errors).length > 0
            }
          >
            다음
          </button>
        </div>
      </form>
      <div className={S.SigninBox}>
        <p className={S.UnderText}>계정이 이미있으신가요?</p>
        <p className={S.GrayText} onClick={() => router.push('/signip')}>
          로그인
        </p>
      </div>
    </div>
  );
};

export default SignUpTwoPage;
