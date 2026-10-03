"use client";

import { useId, useState, type FormEvent } from "react";
import { projectTypes } from "@/lib/content";
import { site } from "@/lib/site";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

function validate(values: Fields): Errors {
  const next: Errors = {};
  if (values.name.trim().length < 2) next.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    next.email = "Enter a valid email address.";
  }
  if (values.phone.trim() && !/^[0-9+().\-\s]{6,}$/.test(values.phone.trim())) {
    next.phone = "Enter a valid phone number, or leave this blank.";
  }
  if (!values.projectType) next.projectType = "Select a project type.";
  if (values.message.trim().length < 12) {
    next.message = "Describe the project in a sentence or two.";
  }
  return next;
}

function mailtoFor(values: Fields) {
  const lines = [
    `Name: ${values.name.trim()}`,
    `Company: ${values.company.trim() || "—"}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim() || "—"}`,
    `Project type: ${values.projectType}`,
    "",
    values.message.trim(),
  ];
  const subject = `Project enquiry from ${values.name.trim()}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

const fieldClass =
  "mt-2 w-full border-b border-line bg-transparent py-3 text-base text-ink outline-none transition-colors focus:border-ink";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState(false);
  const formId = useId();

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setReady(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    const keys = Object.keys(next) as Array<keyof Fields>;
    if (keys.length > 0) {
      setReady(false);
      document.getElementById(`${formId}-${keys[0]}`)?.focus();
      return;
    }
    setReady(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-7">
      {Object.keys(errors).length > 0 ? (
        <p className="text-sm text-[#7a2e2e]" role="alert">
          Check the highlighted fields before continuing.
        </p>
      ) : null}

      <Field
        id={`${formId}-name`}
        label="Name"
        value={fields.name}
        error={errors.name}
        autoComplete="name"
        onChange={(value) => update("name", value)}
      />
      <Field
        id={`${formId}-company`}
        label="Company"
        value={fields.company}
        autoComplete="organization"
        onChange={(value) => update("company", value)}
      />
      <Field
        id={`${formId}-email`}
        label="Email"
        type="email"
        value={fields.email}
        error={errors.email}
        autoComplete="email"
        onChange={(value) => update("email", value)}
      />
      <Field
        id={`${formId}-phone`}
        label="Phone"
        type="tel"
        value={fields.phone}
        error={errors.phone}
        autoComplete="tel"
        onChange={(value) => update("phone", value)}
      />

      <div>
        <label htmlFor={`${formId}-projectType`} className="text-[0.72rem] font-medium tracking-[0.16em] text-stone uppercase">
          Project type
        </label>
        <select
          id={`${formId}-projectType`}
          value={fields.projectType}
          onChange={(event) => update("projectType", event.target.value)}
          aria-invalid={errors.projectType ? true : undefined}
          aria-describedby={errors.projectType ? `${formId}-projectType-error` : undefined}
          className={`${fieldClass} appearance-none`}
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <p id={`${formId}-projectType-error`} className="mt-2 text-sm text-[#7a2e2e]">
            {errors.projectType}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="text-[0.72rem] font-medium tracking-[0.16em] text-stone uppercase">
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          value={fields.message}
          rows={5}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className={`${fieldClass} resize-y`}
        />
        {errors.message ? (
          <p id={`${formId}-message-error`} className="mt-2 text-sm text-[#7a2e2e]">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center bg-ink px-6 text-sm font-medium text-ivory transition-colors duration-300 hover:bg-[#45185c]"
        >
          Send Enquiry
        </button>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
          This page does not submit the form to a server. A valid enquiry can be sent by email.
        </p>
      </div>

      {ready ? (
        <div role="status" className="border-t border-line pt-6">
          <p className="font-serif text-2xl text-ink">Ready to send.</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">
            Open your email with these details addressed to {site.email}, or call {site.phone}.
          </p>
          <a
            href={mailtoFor(fields)}
            className="mt-5 inline-flex min-h-12 items-center border border-ink/20 px-6 text-sm text-ink"
          >
            Email this enquiry
          </a>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[0.72rem] font-medium tracking-[0.16em] text-stone uppercase">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClass}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#7a2e2e]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
