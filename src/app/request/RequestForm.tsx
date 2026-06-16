"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { cases } from "@/data/cases";

const PREFECTURES = [
  "北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県",
  "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
  "新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県",
  "静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県",
  "奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県",
  "徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県",
  "熊本県","大分県","宮崎県","鹿児島県","沖縄県",
];

const OCCUPATIONS = [
  "会社員（正社員）","会社員（契約・派遣）","公務員","自営業・経営者",
  "専業主婦・主夫","無職","学生","その他",
];

const FUNDING_RANGES = [
  "50万円未満","50〜100万円未満","100〜300万円未満","300〜500万円未満","500万円以上",
];

const STARTUP_TIMINGS = [
  "すぐにでも（3ヶ月以内）","半年以内","1年以内","1年以上先","まだ未定",
];

export default function RequestForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const preselectedCase = searchParams.get("case");

  const [selectedCases, setSelectedCases] = useState<string[]>(
    preselectedCase ? [preselectedCase] : []
  );
  const [trackingData, setTrackingData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    lastNameKana: "",
    firstNameKana: "",
    email: "",
    phone: "",
    prefecture: "",
    occupation: "",
    selfFunding: "",
    startupTiming: "",
    message: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
    agreeToProvide: false,
  });

  useEffect(() => {
    const stored = sessionStorage.getItem("hitoribizu_tracking");
    if (stored) {
      try {
        setTrackingData(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const toggleCase = (id: string) => {
    setSelectedCases((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.lastName) e.lastName = "姓を入力してください";
    if (!form.firstName) e.firstName = "名を入力してください";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "正しいメールアドレスを入力してください";
    if (!form.phone || !/^[0-9\-]{10,13}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "正しい電話番号を入力してください（ハイフンなし10〜11桁）";
    if (!form.prefecture) e.prefecture = "都道府県を選択してください";
    if (!form.selfFunding) e.selfFunding = "自己資金を選択してください";
    if (!form.startupTiming) e.startupTiming = "開業時期を選択してください";
    if (selectedCases.length === 0) e.selectedCases = "1件以上の案件を選択してください";
    if (!form.agreeToTerms) e.agreeToTerms = "利用規約への同意が必要です";
    if (!form.agreeToPrivacy) e.agreeToPrivacy = "プライバシーポリシーへの同意が必要です";
    if (!form.agreeToProvide) e.agreeToProvide = "個人情報の第三者提供への同意が必要です";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document.getElementById(firstKey)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSubmitting(true);

    // MVP: log the lead data (no backend yet)
    const leadData = {
      ...form,
      selectedCases,
      tracking: trackingData,
      submittedAt: new Date().toISOString(),
      leadId: `LEAD-${Date.now()}`,
    };
    console.log("Lead submitted:", leadData);

    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    router.push("/request/thanks");
  };

  const field = (id: string) => ({
    id,
    className: `w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
      errors[id] ? "border-red-400 bg-red-50" : "border-gray-300"
    }`,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* Case Selection */}
      <div>
        <h2 className="text-base font-black text-gray-900 mb-1">
          資料請求する案件を選ぶ
          <span className="text-red-500 ml-1">*</span>
        </h2>
        <p className="text-xs text-gray-500 mb-3">複数選択可</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" id="selectedCases">
          {cases.map((c) => (
            <label
              key={c.id}
              className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                selectedCases.includes(c.id)
                  ? "border-emerald-400 bg-emerald-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                className="mt-0.5 accent-emerald-600"
                checked={selectedCases.includes(c.id)}
                onChange={() => toggleCase(c.id)}
              />
              <div>
                <p className="text-sm font-semibold text-gray-900 leading-snug">{c.title}</p>
                <p className="text-xs text-gray-500">{c.companyName}</p>
              </div>
            </label>
          ))}
        </div>
        {errors.selectedCases && (
          <p className="text-red-500 text-xs mt-1">{errors.selectedCases}</p>
        )}
      </div>

      {/* Personal Info */}
      <div>
        <h2 className="text-base font-black text-gray-900 mb-4">お客様情報</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="lastName" className="block text-xs font-semibold text-gray-700 mb-1">
                姓 <span className="text-red-500">*</span>
              </label>
              <input
                {...field("lastName")}
                type="text"
                placeholder="山田"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
            <div>
              <label htmlFor="firstName" className="block text-xs font-semibold text-gray-700 mb-1">
                名 <span className="text-red-500">*</span>
              </label>
              <input
                {...field("firstName")}
                type="text"
                placeholder="太郎"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">姓（フリガナ）</label>
              <input
                id="lastNameKana"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                type="text"
                placeholder="ヤマダ"
                value={form.lastNameKana}
                onChange={(e) => setForm({ ...form, lastNameKana: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">名（フリガナ）</label>
              <input
                id="firstNameKana"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                type="text"
                placeholder="タロウ"
                value={form.firstNameKana}
                onChange={(e) => setForm({ ...form, firstNameKana: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              {...field("email")}
              type="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
              電話番号 <span className="text-red-500">*</span>
            </label>
            <input
              {...field("phone")}
              type="tel"
              placeholder="09012345678"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="prefecture" className="block text-xs font-semibold text-gray-700 mb-1">
              お住まいの都道府県 <span className="text-red-500">*</span>
            </label>
            <select
              {...field("prefecture")}
              value={form.prefecture}
              onChange={(e) => setForm({ ...form, prefecture: e.target.value })}
            >
              <option value="">選択してください</option>
              {PREFECTURES.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            {errors.prefecture && <p className="text-red-500 text-xs mt-1">{errors.prefecture}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">職業</label>
            <select
              id="occupation"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={form.occupation}
              onChange={(e) => setForm({ ...form, occupation: e.target.value })}
            >
              <option value="">選択してください</option>
              {OCCUPATIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="selfFunding" className="block text-xs font-semibold text-gray-700 mb-1">
              開業に使える自己資金 <span className="text-red-500">*</span>
            </label>
            <select
              {...field("selfFunding")}
              value={form.selfFunding}
              onChange={(e) => setForm({ ...form, selfFunding: e.target.value })}
            >
              <option value="">選択してください</option>
              {FUNDING_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            {errors.selfFunding && <p className="text-red-500 text-xs mt-1">{errors.selfFunding}</p>}
          </div>

          <div>
            <label htmlFor="startupTiming" className="block text-xs font-semibold text-gray-700 mb-1">
              開業を考えている時期 <span className="text-red-500">*</span>
            </label>
            <select
              {...field("startupTiming")}
              value={form.startupTiming}
              onChange={(e) => setForm({ ...form, startupTiming: e.target.value })}
            >
              <option value="">選択してください</option>
              {STARTUP_TIMINGS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.startupTiming && <p className="text-red-500 text-xs mt-1">{errors.startupTiming}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">その他ご質問・ご要望</label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="ご自由にお書きください（任意）"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Consent */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3">
        <h2 className="text-sm font-black text-gray-900">同意事項</h2>

        {[
          {
            key: "agreeToProvide",
            label: (
              <>
                選択した案件のフランチャイズ本部へ、上記の個人情報を提供することに同意します。
                <span className="text-red-500 ml-1">*</span>
              </>
            ),
          },
          {
            key: "agreeToPrivacy",
            label: (
              <>
                <Link href="/privacy" target="_blank" className="underline text-emerald-700">
                  プライバシーポリシー
                </Link>
                に同意します。
                <span className="text-red-500 ml-1">*</span>
              </>
            ),
          },
          {
            key: "agreeToTerms",
            label: (
              <>
                <Link href="/terms" target="_blank" className="underline text-emerald-700">
                  利用規約
                </Link>
                に同意します。
                <span className="text-red-500 ml-1">*</span>
              </>
            ),
          },
        ].map(({ key, label }) => (
          <div key={key}>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                id={key}
                className="mt-0.5 accent-emerald-600"
                checked={form[key as keyof typeof form] as boolean}
                onChange={(e) => setForm({ ...form, [key]: e.target.checked })}
              />
              <span className="text-xs text-gray-700 leading-relaxed">{label}</span>
            </label>
            {errors[key] && <p className="text-red-500 text-xs mt-1 ml-6">{errors[key]}</p>}
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl text-base hover:bg-emerald-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "送信中..." : "無料で資料請求する"}
      </button>

      <p className="text-xs text-center text-gray-500">
        送信後、FC本部より資料またはご連絡が届きます。しつこい営業はありません。
      </p>
    </form>
  );
}
