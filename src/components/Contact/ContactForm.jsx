import React from "react";
import btn5 from "../assets/btn5.svg";
export default function ContactForm() {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

    const isFormValid = requiredFields.every(
      (field) => formData[field] && formData[field].trim() !== "",
    );

    if (isFormValid) {
      onSubmit();
    } else {
      alert("すべての必須項目を入力してください。");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 w-full border-t border-[#707070a0] md:w-[70%] md:px-5"
    >
      <div className="mt-10 items-center justify-between gap-5 md:flex">
        <div className="mb-3 flex gap-5 md:mb-0 md:w-[35%] md:justify-between">
          <p className="text-[5.5vw] font-light md:text-[1.3vw]">ご相談項目</p>
          <div className="rounded-xl bg-[#D93636] px-4 py-1 font-bold text-white">
            必須
          </div>
        </div>
        <div className="md:w-[65%]">
          <input
            type="text"
            name="consultation"
            value={formData.consultation}
            onChange={handleInputChange}
            placeholder="美肌、二重など"
            className="h-full w-full rounded-lg border border-[#707070] bg-[#EBE9E7] px-3 py-5 outline-0"
          />
        </div>
      </div>

      <div className="mt-10 items-start justify-between gap-5 md:flex">
        <div className="mb-3 flex gap-5 md:mt-3 md:mb-0 md:w-[35%] md:justify-between">
          <p className="text-[5.5vw] font-light md:text-[1.3vw]">お名前</p>
          <div className="rounded-xl bg-[#D93636] px-4 py-1 font-bold text-white">
            必須
          </div>
        </div>
        <div className="md:w-[65%]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="山田 太郎"
            className="h-full w-full rounded-lg border border-[#707070] bg-[#EBE9E7] px-3 py-5 outline-0"
          />
          <p className="mt-2 text-[4.5vw] font-light md:text-lg">
            フルネームでご記入ください。
          </p>
        </div>
      </div>

      <div className="mt-10 items-center justify-between gap-5 md:flex">
        <div className="mb-3 flex gap-5 md:mb-0 md:w-[35%] md:justify-between">
          <p className="text-[5.5vw] font-light md:text-[1.3vw]">
            お名前（フリガナ）
          </p>
          <div className="rounded-xl bg-[#D93636] px-4 py-1 font-bold text-white">
            必須
          </div>
        </div>
        <div className="md:w-[65%]">
          <input
            type="text"
            name="nameKana"
            value={formData.nameKana}
            onChange={handleInputChange}
            placeholder="ヤマダ タロウ"
            className="h-full w-full rounded-lg border border-[#707070] bg-[#EBE9E7] px-3 py-5 outline-0"
          />
        </div>
      </div>

      <div className="mt-10 items-start justify-between gap-5 md:flex">
        <div className="mb-3 flex gap-5 md:mt-3 md:mb-0 md:w-[35%] md:justify-between">
          <p className="text-[5.5vw] font-light md:text-[1.3vw]">Eメール</p>
          <div className="rounded-xl bg-[#D93636] px-4 py-1 font-bold text-white">
            必須
          </div>
        </div>
        <div className="md:w-[65%]">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@email.com"
            className="h-full w-full rounded-lg border border-[#707070] bg-[#EBE9E7] px-3 py-5 outline-0"
          />
          <input
            type="email"
            name="emailConfirm"
            value={formData.emailConfirm}
            onChange={handleInputChange}
            placeholder="example@email.com"
            className="mt-4 h-full w-full rounded-lg border border-[#707070] bg-[#EBE9E7] px-3 py-5 outline-0 md:mt-7"
          />
          <p className="mt-2 text-[4.5vw] font-light md:text-lg">
            確認のためもう一度入力してください。
          </p>
        </div>
      </div>

      <div className="mt-10 items-start justify-between gap-5 md:flex">
        <div className="mb-3 flex gap-5 md:mt-3 md:mb-0 md:w-[35%] md:justify-between">
          <p className="text-[5.5vw] font-light md:text-[1.3vw]">
            お問い合わせ内容
          </p>
          <div className="rounded-xl bg-[#D93636] px-4 py-1 font-bold text-white">
            必須
          </div>
        </div>
        <div className="md:w-[65%]">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="h-60 w-full rounded-lg border border-[#707070] bg-[#EBE9E7] px-3 py-5 outline-0"
          />
        </div>
      </div>

      <div className="mt-10 items-start justify-between gap-5 md:flex">
        <div className="mb-3 flex gap-5 md:mt-3 md:mb-0 md:w-[35%] md:justify-between">
          <p className="text-[5.5vw] font-light md:text-[1.3vw]">電話番号</p>
          <div className="rounded-xl bg-[#D93636] px-4 py-1 font-bold text-white">
            必須
          </div>
        </div>
        <div className="md:w-[65%]">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="h-full w-full rounded-lg border border-[#707070] bg-[#EBE9E7] px-3 py-5 outline-0"
          />
        </div>
      </div>

      <div className="mt-10 items-center justify-between gap-5 md:flex">
        <div className="mb-3 flex gap-5 md:mb-0 md:w-[35%] md:justify-between">
          <p className="text-[5.5vw] font-light md:text-[1.3vw]">ご年齢</p>
          <div className="rounded-xl bg-[#D93636] px-4 py-1 font-bold text-white">
            必須
          </div>
        </div>
        <div className="md:w-[65%]">
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="h-full w-full rounded-lg border border-[#707070] bg-[#EBE9E7] px-3 py-5 outline-0"
          />
        </div>
      </div>

      <div className="mt-10 items-start justify-between gap-5 md:flex">
        <div className="mb-3 flex gap-5 md:mt-3 md:mb-0 md:w-[35%] md:justify-between">
          <p className="text-[5.5vw] font-light md:text-[1.3vw]">性別</p>
          <div className="rounded-xl bg-[#D93636] px-4 py-1 font-bold text-white">
            必須
          </div>
        </div>
        <div className="flex gap-10 md:block md:w-[65%]">
          <div className="flex gap-3 text-[5vw] md:mb-5 md:text-[20px]">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
            />
            男{" "}
          </div>
          <div className="flex gap-3 text-[5vw] md:text-[20px]">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
            女
          </div>
        </div>
      </div>

      <div className="mt-10 items-start justify-between gap-5 md:flex">
        <div className="mb-3 flex gap-5 md:mt-3 md:mb-0 md:w-[35%] md:justify-between">
          <p className="text-[5.5vw] font-light md:text-[1.3vw]">
            何を見て当院をお知り
            <br />
            になりましたか？
          </p>
          <div className="h-9 rounded-xl bg-[#D93636] px-4 py-1 font-bold text-white">
            必須
          </div>
        </div>
        <div className="md:w-[65%]">
          <textarea
            name="referralSource"
            value={formData.referralSource}
            onChange={handleInputChange}
            className="h-30 w-full rounded-lg border border-[#707070] bg-[#EBE9E7] px-3 py-5 outline-0"
          />
        </div>
      </div>

      <div className="mt-20 flex w-full justify-center">
        <button type="submit">
          <img src={btn5} alt="" />
        </button>
      </div>
    </form>
  );
}
