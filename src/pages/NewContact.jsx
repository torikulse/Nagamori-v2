import React, { useState } from "react";
import ContactHeader from "../components/Contact/ContactHeader";
import ContactForm from "../components/Contact/ContactForm";

export default function NewContact() {
  const [formData, setFormData] = useState({
    consultation: "", // ご相談項目
    name: "", // お名前
    nameKana: "", // お名前（フリガナ）
    email: "", // Eメール
    emailConfirm: "", // Eメール確認
    message: "", // お問い合わせ内容
    phone: "", // 電話番号
    age: "", // ご年齢
    gender: "", // 性別
    referralSource: "", // 何を見て当院をお知りになりましたか？
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [finalConfirmation, setFinalConfirmation] = useState(false);

  const isFormComplete = () => {
    const requiredFields = [
      "consultation",
      "name",
      "nameKana",
      "email",
      "emailConfirm",
      "message",
      "phone",
      "age",
      "gender",
      "referralSource",
    ];

    return requiredFields.every((field) => formData[field].trim() !== "");
  };

  const handleFormSubmit = () => {
    if (isFormComplete()) {
      setShowConfirmation(true);
    }
  };
  //previews code
  const [step, setStep] = useState(1);
  const handleStep = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <div>
      <ContactHeader step={step} />
      {step == 1 ? <ContactForm /> : ""}
    </div>
  );
}
