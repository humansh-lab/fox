"use client"

import emailjs from "@emailjs/browser"
import { useState } from "react"

export default function Contact() {
  const [msg, setMsg] = useState("")

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    emailjs
      .sendForm(
        "service_194xd1s",
        "template_6hlbv6d",
        form,
        "6JTzplJXEQ4F1TPYk"
      )
      .then(() => {
        setMsg("Sent 🚀")
        form.reset()
      })
      .catch(() => {
        setMsg("Error ❌")
      })
  }

  return (
    <section id="contact" className="py-24 text-center">

      <h2 className="text-4xl mb-6">Contact</h2>

      <form onSubmit={send} className="flex flex-col gap-4 max-w-md mx-auto">

        <input
          name="user_name"
          placeholder="Name"
          required
          className="p-4 bg-[#111] border border-[#333]"
        />

        <input
          name="user_email"
          type="email"
          placeholder="Email"
          required
          className="p-4 bg-[#111] border border-[#333]"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          className="p-4 bg-[#111] border border-[#333]"
        />

        <button className="p-4 bg-white text-black font-semibold hover:bg-gray-200 transition">
          Send Message
        </button>

      </form>

      <p className="mt-4 text-gray-400">{msg}</p>
    </section>
  )
}