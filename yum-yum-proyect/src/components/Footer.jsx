import React, { useState } from "react";
import logo from "../assets/logo-yum-yum.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <button className="w-auto h-6 sm:h-7">
              <img src={logo} alt="logo-yum-yum" className="h-6 cursor-pointer hover:drop-shadow-[0px_2px_theme(colors.rose.300)]" />
            </button>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
              <a
                href="#"
                className="mx-4 text-md text-gray-500 font-normal cursor-pointer transition-colors duration-300 hover:text-pink-400"
                aria-label="Reddit"
              >
                Inicio
              </a>

              <a
                href="#"
                className="mx-4 text-md text-gray-500 font-normal cursor-pointer transition-colors duration-300 hover:text-pink-400"
                aria-label="Reddit"
              >
                Productos
              </a>

              <a
                href="#"
                className="mx-4 text-md text-gray-500 font-normal cursor-pointer transition-colors duration-300 hover:text-pink-400"
                aria-label="Reddit"
              >
                Nosotros
              </a>

              <a
                href="#"
                className="mx-4 text-md text-gray-500 font-normal cursor-pointer  transition-colors duration-300 hover:text-pink-400"
                aria-label="Reddit"
              >
                Contacto
              </a>
            </div>
          </div>

          <hr className="my-2 border-gray-200 md:my-5 dark:border-gray-700" />

          <div className="flex flex-col items-center flex-col sm:justify-between gap-4">
            <div className="flex flex-row gap-2 sx:flex-col text-center">
              <p className="text-md text-gray-500 font-normal">© Copyright 2024. All Rights Reserved.</p>
              <p className="text-md text-gray-500 font-normal">Dev with ❤ by Sense8.</p>
            </div>

            <div className="flex -mx-2">
              {/* Icono WhatsApp */}
              <a
                href="https://api.whatsapp.com/message/6M4LB3XJPB7EB1?autoload=1&amp;app_absent=0"
                className="mx-2 text-gray-500 font-normal cursor-pointer  transition-colors duration-300 hover:text-pink-400 hover:scale-115 duration-700 ease-in-out"
                aria-label="WhatsApp"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                  <path
                    fill="#fff"
                    d="m4.868 43.303 2.694-9.835a18.94 18.94 0 0 1-2.535-9.489C5.032 13.514 13.548 5 24.014 5a18.87 18.87 0 0 1 13.43 5.566A18.87 18.87 0 0 1 43 23.994c-.004 10.465-8.522 18.98-18.986 18.98h-.008a18.97 18.97 0 0 1-9.073-2.311z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.868 43.803a.5.5 0 0 1-.482-.631l2.639-9.636a19.5 19.5 0 0 1-2.497-9.556C4.532 13.238 13.273 4.5 24.014 4.5a19.37 19.37 0 0 1 13.784 5.713A19.36 19.36 0 0 1 43.5 23.994c-.004 10.741-8.746 19.48-19.486 19.48a19.54 19.54 0 0 1-9.144-2.277l-9.875 2.589a.5.5 0 0 1-.127.017"
                  ></path>
                  <path
                    fill="#cfd8dc"
                    d="M24.014 5a18.87 18.87 0 0 1 13.43 5.566A18.87 18.87 0 0 1 43 23.994c-.004 10.465-8.522 18.98-18.986 18.98h-.008a18.97 18.97 0 0 1-9.073-2.311l-10.065 2.64 2.694-9.835a18.94 18.94 0 0 1-2.535-9.489C5.032 13.514 13.548 5 24.014 5m0-1C12.998 4 4.032 12.962 4.027 23.979a20 20 0 0 0 2.461 9.622L3.903 43.04a.998.998 0 0 0 1.219 1.231l9.687-2.54a20 20 0 0 0 9.197 2.244c11.024 0 19.99-8.963 19.995-19.98A19.86 19.86 0 0 0 38.153 9.86 19.87 19.87 0 0 0 24.014 4"
                  ></path>
                  <path
                    fill="#40c351"
                    d="M35.176 12.832a15.67 15.67 0 0 0-11.157-4.626c-8.704 0-15.783 7.076-15.787 15.774a15.74 15.74 0 0 0 2.413 8.396l.376.597-1.595 5.821 5.973-1.566.577.342a15.75 15.75 0 0 0 8.032 2.199h.006c8.698 0 15.777-7.077 15.78-15.776a15.68 15.68 0 0 0-4.618-11.161"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M19.268 16.045c-.355-.79-.729-.806-1.068-.82-.277-.012-.593-.011-.909-.011s-.83.119-1.265.594-1.661 1.622-1.661 3.956 1.7 4.59 1.937 4.906 3.282 5.259 8.104 7.161c4.007 1.58 4.823 1.266 5.693 1.187s2.807-1.147 3.202-2.255.395-2.057.277-2.255c-.119-.198-.435-.316-.909-.554s-2.807-1.385-3.242-1.543-.751-.237-1.068.238c-.316.474-1.225 1.543-1.502 1.859s-.554.357-1.028.119-2.002-.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285-.277-.474-.03-.731.208-.968.213-.213.474-.554.712-.831.237-.277.316-.475.474-.791s.079-.594-.04-.831c-.117-.238-1.039-2.584-1.461-3.522"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              {/* Icono Tik Tok */}
              <a
                href="https://www.tiktok.com/@yum.bylorennivia"
                className="mx-2 text-gray-500 font-normal cursor-pointer  transition-colors duration-300 hover:text-pink-400 hover:scale-115 duration-700 ease-in-out"
                aria-label="Instagram"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                  <path
                    fill="#212121"
                    fillRule="evenodd"
                    d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#ec407a"
                    fillRule="evenodd"
                    d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#81d4fa"
                    fillRule="evenodd"
                    d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
                {/* Icono Instagram */}
              <a
                href="https://www.instagram.com/yum.bylorennivia/"
                className="mx-2 text-gray-500 font-normal cursor-pointer  transition-colors duration-300 hover:text-pink-400 hover:scale-115 duration-700 ease-in-out"
                aria-label="Instagram"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                  <path
                    fill="#304ffe"
                    d="M41.67 13.48c-.4.26-.97.5-1.21.77-.09.09-.14.19-.12.29v1.03l-.3 1.01-.3 1-.33 1.1-.68 2.25-.66 2.22-.5 1.67c0 .26-.01.52-.03.77-.07.96-.27 1.88-.59 2.74-.19.53-.42 1.04-.7 1.52-.1.19-.22.38-.34.56-.4.63-.88 1.21-1.41 1.72-.41.41-.86.79-1.35 1.11h-.01q-.12.105-.27.18c-.31.21-.64.39-.98.55-.23.12-.46.22-.7.31-.05.03-.11.05-.16.07-.57.27-1.23.45-1.89.54-.04.01-.07.01-.11.02-.4.07-.79.13-1.19.16-.18.02-.37.03-.55.03l-.71-.04-3.42-.18c0-.01-.01 0-.01 0l-1.72-.09c-.13 0-.27 0-.4-.01-.54-.02-1.06-.08-1.58-.19h-.01c-.95-.18-1.86-.5-2.71-.93-.47-.24-.93-.51-1.36-.82-.18-.13-.35-.27-.52-.42-.48-.4-.91-.83-1.31-1.27-.06-.06-.11-.12-.16-.18-.06-.06-.12-.13-.17-.19-.38-.48-.7-.97-.96-1.49-.24-.46-.43-.95-.58-1.49-.06-.19-.11-.37-.15-.57a.08.08 0 0 1-.02-.05c-.1-.41-.19-.84-.24-1.27-.06-.33-.09-.66-.09-1-.02-.13-.02-.27-.02-.4l1.91-2.95 1.87-2.88.85-1.31.77-1.18.26-.41v-1.03c.02-.23.03-.47.02-.69-.01-.7-.15-1.38-.38-2.03-.22-.69-.53-1.34-.85-1.94-.38-.69-.78-1.31-1.11-1.87-.49-.82-.83-1.49-.74-1.96C14.47 6.09 15.23 6 16 6h16c4.18 0 7.78 2.6 9.27 6.26.16.39.3.8.4 1.22"
                  ></path>
                  <path
                    fill="#4928f4"
                    d="M42 16v.27l-1.38.8-.88.51-.97.56-1.94 1.13-1.9 1.1-1.94 1.12-.77.45c0 .48-.12.92-.34 1.32-.31.58-.83 1.06-1.49 1.47-.67.41-1.49.74-2.41.98 0 0 0-.01-.01 0-3.56.92-8.42.5-10.78-1.26-.66-.49-1.12-1.09-1.32-1.78a3 3 0 0 1-.09-.73v-7.19c.01-.15-.09-.3-.27-.45-.54-.43-1.81-.84-3.23-1.25-1.11-.31-2.3-.62-3.3-.92-.79-.24-1.46-.48-1.86-.71.18-.35.39-.7.61-1.03 1.4-2.05 3.54-3.56 6.02-4.13C14.47 6.09 15.23 6 16 6h10.8a33.7 33.7 0 0 1 14.47 6.26c.16.39.3.8.4 1.22.18.66.29 1.34.32 2.05.01.15.01.31.01.47"
                  ></path>
                  <path
                    fill="#6200ea"
                    d="M42 16v4.41l-.22.68-.75 2.33-.78 2.4-.41 1.28-.38 1.19-.37 1.13-.36 1.12-.19.59-.25.78c0 .76-.02 1.43-.07 2-.01.06-.02.12-.02.18-.06.53-.14.98-.27 1.36-.01.06-.03.12-.05.17-.26.72-.65 1.18-1.23 1.48-.14.08-.3.14-.47.2-.53.18-1.2.27-2.02.32-.6.04-1.29.05-2.07.05h-.69l-1.19-.05-.21-.01-2.17-.09-2.2-.09-7.25-.3-1.88-.08h-.26c-.78-.01-1.45-.06-2.03-.14-.84-.13-1.49-.35-1.98-.68-.7-.45-1.11-1.11-1.35-2.03-.06-.22-.11-.45-.14-.7-.1-.58-.15-1.25-.18-2 0-.15 0-.3-.01-.46-.01-.01 0-.01 0-.01v-.58c-.01-.29-.01-.59-.01-.9l.05-1.61.03-1.15.04-1.34v-.19l.07-2.46.07-2.46.07-2.31.06-2.27.02-.6c0-.31-1.05-.49-2.22-.64-.93-.12-1.95-.23-2.56-.37.05-.23.1-.46.16-.68.18-.72.45-1.4.79-2.05.18-.35.39-.7.61-1.03 2.16-.95 4.41-1.69 6.76-2.17 2.06-.43 4.21-.66 6.43-.66 7.36 0 14.16 2.49 19.54 6.69.52.4 1.03.83 1.53 1.28.01.15.01.31.01.47"
                  ></path>
                  <path
                    fill="#673ab7"
                    d="M42 18.37v4.54l-.55 1.06-1.05 2.05-.56 1.08-.51.99-.22.43c0 .31 0 .61-.02.9 0 .43-.02.84-.05 1.22-.04.45-.1.86-.16 1.24-.15.79-.36 1.47-.66 2.03-.04.07-.08.14-.12.2-.11.18-.24.35-.38.51-.18.22-.38.41-.61.57q-.51.39-1.2.63c-.57.21-1.23.35-2.01.43-.51.05-1.07.08-1.68.08l-.42.02-2.08.12h-.01l-2.21.13-2.25.13-3.1.18-3.77.22-.55.03c-.51 0-.99-.03-1.45-.09-.05-.01-.09-.02-.14-.02q-1.02-.165-1.86-.54c-.68-.3-1.27-.7-1.77-1.18-.44-.43-.82-.92-1.13-1.47-.07-.13-.14-.25-.2-.39-.3-.59-.54-1.25-.72-1.97-.03-.12-.06-.25-.08-.38-.06-.23-.11-.47-.14-.72-.11-.64-.17-1.32-.2-2.03v-.01c-.01-.29-.02-.57-.02-.87l-.49-1.17-.07-.18-.06-.15-.75-1.79-.12-.29-.72-1.73-.8-1.93H7.1l-.81-1.95-.29-.71V16c0-.63.06-1.25.17-1.85.05-.23.1-.46.16-.68.85-.49 1.74-.94 2.65-1.34 2.08-.93 4.31-1.62 6.62-2.04 1.72-.31 3.51-.48 5.32-.48 7.31 0 13.94 2.65 19.12 6.97.2.16.39.32.58.49.47.41.93.84 1.38 1.3"
                  ></path>
                  <path
                    fill="#8e24aa"
                    d="M42 21.35v5.14l-.57 1.19-1.08 2.25-.01.03c0 .43-.02.82-.05 1.17-.1 1.15-.38 1.88-.84 2.33-.33.34-.74.53-1.25.63-.03.01-.07.01-.1.02-.16.03-.33.05-.51.05-.62.06-1.35.02-2.19-.04-.09 0-.19-.01-.29-.02-.61-.04-1.26-.08-1.98-.11-.39-.01-.8-.02-1.22-.02h-.02l-1.01.08h-.01l-2.27.16-2.59.2-.38.03-3.03.22-1.57.12-1.55.11c-.27 0-.53 0-.79-.01 0 0-.01-.01-.01 0-1.13-.02-2.14-.09-3.04-.26-.83-.14-1.56-.36-2.18-.69-.64-.31-1.17-.75-1.6-1.31q-.615-.825-.9-2.07v-.01c-.14-.67-.22-1.45-.22-2.33l-.15-.27-.89-1.59-.13-.22-.07-.14-.93-1.65-.46-.83-.58-1.03-1-1.79-.53-.94v-3.68c.88-.58 1.79-1.09 2.73-1.55 1.14-.58 2.32-1.07 3.55-1.47 1.34-.44 2.74-.79 4.17-1.02q2.175-.36 4.47-.36c6.8 0 13.04 2.43 17.85 6.47.22.17.43.36.64.54.84.75 1.64 1.56 2.37 2.41.08.09.16.17.22.26"
                  ></path>
                  <path
                    fill="#c2185b"
                    d="M42 24.71v7.23c-.24-.14-.57-.31-.98-.49-.22-.11-.47-.22-.73-.32-.38-.17-.79-.33-1.25-.49-.1-.04-.2-.07-.31-.1-.18-.07-.37-.13-.56-.19-.59-.18-1.24-.35-1.92-.5-.26-.05-.53-.1-.8-.14-.87-.15-1.8-.24-2.77-.25-.08-.01-.17-.01-.25-.01l-2.57.02-3.5.02h-.01l-7.49.06c-2.38 0-3.84.57-4.72.8 0 0-.01 0-.01.01-.93.24-1.22.09-1.3-1.54q-.03-.675-.03-1.74l-.56-.43-.98-.74-.6-.46-.12-.09-1.66-1.26-.25-.19-.52-.4-.96-.72L6 21.91v-3.4c.1-.08.19-.15.29-.21 1.45-1 3-1.85 4.64-2.54 1.46-.62 3-1.11 4.58-1.46.43-.09.87-.18 1.32-.24 1.33-.23 2.7-.34 4.09-.34 6.01 0 11.53 2.09 15.91 5.55.66.52 1.3 1.07 1.9 1.66.82.78 1.59 1.61 2.3 2.49.14.18.28.36.42.55.19.24.37.49.55.74"
                  ></path>
                  <path
                    fill="#d81b60"
                    d="M42 28.72V32c0 .65-.06 1.29-.18 1.91-.18.92-.49 1.8-.91 2.62-.22.05-.47.05-.75.01-.63-.11-1.37-.44-2.17-.87a.4.4 0 0 1-.11-.05c-.25-.13-.51-.27-.77-.43-.53-.29-1.09-.61-1.65-.91-.12-.06-.24-.12-.35-.18-.64-.33-1.3-.63-1.96-.86h-.01c-.14-.05-.29-.1-.44-.14-.57-.16-1.15-.26-1.71-.26l-1.1-.32-4.87-1.41h-.01l-2.99-.87h-.01l-1.3-.38c-3.76 0-6.07 1.6-7.19.99-.44-.23-.7-.81-.79-1.95-.03-.32-.04-.68-.04-1.1l-1.17-.57-.05-.02h-.01l-.84-.42-.92-.44-.07-.03-.17-.09-1.96-.95-1.5-.73v-3.43c.17-.15.35-.29.53-.43.19-.15.38-.29.57-.44h.01c1.18-.85 2.43-1.6 3.76-2.22 1.55-.74 3.2-1.31 4.91-1.68.25-.06.51-.12.77-.16 1.42-.27 2.88-.41 4.37-.41 5.27 0 10.11 1.71 14.01 4.59 1.13.84 2.18 1.77 3.14 2.78.79.83 1.52 1.73 2.18 2.67.05.07.1.14.15.2.37.54.71 1.09 1.03 1.66.21.34.39.69.57 1.04"
                  ></path>
                  <path
                    fill="#f50057"
                    d="M41.82 33.91a9.9 9.9 0 0 1-1.54 3.68c-.14.21-.29.41-.44.6-.36-.14-.89-.34-1.54-.56v-.01c-.49-.17-1.05-.35-1.65-.52a18.217 18.217 0 0 0-2.69-.61c-.6-.1-1.19-.16-1.74-.16l-.46-.13h-.01l-2.42-.7-1.49-.43-1.66-.48h-.01l-.54-.15-6.53-1.88-1.88-.54-1.4-.33-2.28-.54-.28-.07h-.01l-2.29-.53v-.01l-.41-.09-.21-.05-1.67-.39-.19-.05-1.42-1.17L6 27.9v-4.08c.37-.36.75-.7 1.15-1.03.12-.11.25-.21.38-.31.12-.1.25-.2.38-.3a20 20 0 0 1 2.89-1.84c1.3-.7 2.68-1.26 4.13-1.66.28-.09.56-.17.85-.23 1.64-.41 3.36-.62 5.14-.62a21.6 21.6 0 0 1 16.62 7.76c.66.79 1.26 1.62 1.79 2.5.05.07.09.13.13.2.32.53.62 1.08.89 1.64.25.5.47 1 .67 1.52.32.8.58 1.62.8 2.46"
                  ></path>
                  <path
                    fill="#ff1744"
                    d="M40.28 37.59a9.802 9.802 0 0 1-1.9 2.09c-.47.39-.97.74-1.5 1.04-.2-.05-.4-.11-.61-.19-.66-.23-1.35-.61-1.99-1.01-.96-.61-1.79-1.27-2.16-1.57l-.21-.18-1.7-.15-.21-.02-2.2-.19-2.28-.2-3.37-.3-5.34-.47-.02-.01-1.88-.91-1.9-.92-1.53-.74-.33-.16-.41-.2-1.42-.69-1.89-.91-.59-.29-.84-.26v-4.47c.47-.56.97-1.09 1.5-1.6.34-.32.7-.64 1.07-.94.06-.05.12-.1.18-.14.04-.05.09-.08.13-.1.59-.48 1.21-.91 1.85-1.3.74-.47 1.52-.89 2.33-1.24.87-.39 1.78-.72 2.72-.97 1.63-.46 3.36-.7 5.14-.7 4.08 0 7.85 1.24 10.96 3.37 1.99 1.36 3.71 3.08 5.07 5.07.45.64.85 1.32 1.22 2.02.13.26.26.52.37.78.12.25.23.5.34.75.21.52.4 1.04.57 1.58a18.6 18.6 0 0 1 .83 4.13"
                  ></path>
                  <path
                    fill="#ff5722"
                    d="M38.39 39.42c0 .08 0 .17-.01.26-.47.39-.97.74-1.5 1.04-.22.12-.44.24-.67.34-.23.11-.46.21-.7.3-.34-.18-.8-.4-1.29-.61-.69-.31-1.44-.59-2.02-.68-.14-.03-.27-.04-.39-.04l-1.64-.21h-.02l-2.04-.27-2.06-.27-.96-.12-7.56-.98c-.49 0-1.01-.03-1.55-.1-.66-.06-1.35-.16-2.04-.3-.68-.12-1.37-.28-2.03-.45-.69-.16-1.37-.35-2-.53a75 75 0 0 1-3.16-1.02c-.18-.43-.33-.88-.44-1.34A9.4 9.4 0 0 1 6 32v-1.67c.32-.53.67-1.05 1.06-1.54.71-.94 1.52-1.8 2.4-2.56.03-.04.07-.07.1-.09l.01-.01c.31-.28.63-.53.97-.77.04-.04.08-.07.12-.1.16-.12.33-.24.51-.35a17.2 17.2 0 0 1 4.7-2.24c1.6-.48 3.29-.73 5.05-.73 3.49 0 6.75 1.03 9.47 2.79 2.01 1.29 3.74 2.99 5.06 4.98.16.23.31.46.46.7.69 1.17 1.26 2.43 1.68 3.75.05.15.09.3.13.46.08.27.15.55.21.83.02.07.04.14.06.22.14.63.24 1.29.31 1.95v.01c.06.59.09 1.19.09 1.79"
                  ></path>
                  <path
                    fill="#ff6f00"
                    d="M36.33 39.42c0 .35-.02.73-.06 1.11l-.06.53a9.503 9.503 0 0 1-2.08.71c-.32.07-.65.13-.98.16h-.01c-.31-.19-.67-.42-1.04-.68-.67-.47-1.37-1-1.93-1.43l-.02-.02c-.59-.45-1.01-.79-1.01-.79l-1.06.04-2.04.07-.95.04-3.82.14-3.23.12c-.21.01-.46.01-.77 0h-.01c-.42-.01-.92-.04-1.47-.09-.64-.05-1.34-.11-2.05-.18-.69-.08-1.39-.16-2.06-.24-.74-.08-1.44-.17-2.04-.25-.47-.06-.88-.11-1.21-.15-.28-.32-.53-.65-.77-1.01a9 9 0 0 1-.91-1.72c-.18-.43-.33-.88-.44-1.34.29-.89.67-1.73 1.12-2.54.36-.66.78-1.29 1.24-1.89.45-.59.94-1.14 1.47-1.64v-.01q.225-.225.45-.42c.28-.26.57-.5.87-.73h.01c.01-.02.02-.02.03-.03.24-.19.49-.36.74-.53a15.2 15.2 0 0 1 4.95-2.2c1.19-.29 2.44-.45 3.73-.45 2.54 0 4.94.61 7.05 1.71h.01c1.81.93 3.41 2.21 4.7 3.75.71.82 1.32 1.72 1.82 2.67.35.64.65 1.31.9 1.99.02.06.04.11.06.16.17.5.32 1.02.45 1.54.09.37.16.75.22 1.13.02.12.04.23.05.35.1.69.15 1.4.15 2.12"
                  ></path>
                  <path
                    fill="#ff9800"
                    d="M34.28 39.42v.1c0 .34-.03.77-.06 1.23l-.09 1.02c-.32.07-.65.13-.98.16h-.01c-.38.05-.75.07-1.14.07h-1.75l-.38-.11-1.97-.6-2-.6-4.63-1.39-2-.6s-.83.33-2 .72h-.01c-.45.15-.94.31-1.46.47-.65.19-1.34.38-2.02.53-.7.16-1.39.28-2.01.33-.19.02-.38.03-.55.03a10.282 10.282 0 0 1-3.56-3.28c.07-.45.15-.89.27-1.32.3-1.19.77-2.33 1.39-3.37.34-.59.72-1.16 1.16-1.69.01-.03.04-.06.07-.08-.01-.01 0-.01 0-.01.13-.17.27-.33.41-.48v-.01c.41-.44.83-.86 1.29-1.25.16-.13.31-.26.48-.39.03-.03.06-.05.1-.08 2.25-1.72 5.06-2.76 8.09-2.76 3.44 0 6.57 1.29 8.94 3.41a13.4 13.4 0 0 1 2.84 3.63c.06.1.12.21.17.32.09.18.18.37.26.57.33.72.59 1.48.77 2.26l.06.24a13.382 13.382 0 0 1 .32 2.93"
                  ></path>
                  <path
                    fill="#ffc107"
                    d="M32.22 39.42c0 .2-.01.42-.02.65-.02.37-.05.77-.1 1.18-.02.25-.06.5-.1.75h-5.48l-1.06-.17-4.14-.66-.59-.09-1.35-.22c-.59 0-1.87.26-3.22.51-.71.13-1.43.27-2.08.36l-.23.03h-.01c-.7-.15-1.38-.38-2.02-.68q-.3-.135-.6-.3c-.56-.31-1.1-.68-1.59-1.09-.01-.12-.02-.22-.02-.27 0-.26.01-.51.03-.76q.06-.96.27-1.86c.22-.91.54-1.79.97-2.6.08-.17.17-.34.27-.5.04-.08.09-.15.13-.23.18-.29.38-.57.58-.85.42-.55.89-1.07 1.39-1.54h.01c.04-.04.08-.08.12-.11.05-.04.09-.09.14-.12.2-.18.4-.34.61-.49 0-.01.01-.01.01-.01a11.28 11.28 0 0 1 6.78-2.24c1.98 0 3.82.5 5.43 1.38h.01c1.38.76 2.58 1.79 3.53 3.03.37.48.7.99.98 1.53h.01l.15.3c.3.59.54 1.21.72 1.85h.01c.01.05.03.1.04.15.12.43.22.87.29 1.32l.03.28c.07.48.1.97.1 1.47"
                  ></path>
                  <path
                    fill="#ffd54f"
                    d="M30.17 39.31c0 .16 0 .33-.02.49v.02c-.02.72-.12 1.43-.28 2.07 0 .04-.01.07-.03.11h-4.67l-3.85-.83-.51-.11-.08.02-4.27.88-.19.04H16c-.64 0-1.27-.06-1.88-.18l-.27-.06h-.01c-.7-.15-1.38-.38-2.02-.68-.02-.11-.04-.22-.05-.33-.07-.43-.1-.88-.1-1.33 0-.17 0-.34.01-.51.03-.54.11-1.07.23-1.58.08-.38.19-.75.32-1.1.11-.31.24-.61.38-.9.12-.25.26-.49.4-.73.14-.23.29-.45.45-.67a9 9 0 0 1 2.36-2.24 9.24 9.24 0 0 1 5.1-1.52c.37 0 .73.02 1.08.07h.02c1.07.12 2.07.42 2.99.87h.01c1.45.71 2.68 1.78 3.58 3.1.15.22.3.46.43.7.11.19.21.39.3.59.14.31.27.64.38.97h.01c.11.37.21.74.28 1.13v.01c.11.55.17 1.12.17 1.7"
                  ></path>
                  <path
                    fill="#ffe082"
                    d="M28.11 39.52v.03q0 .885-.21 1.74c-.05.24-.12.48-.21.71h-4.48l-2.29-.63-2.29.63H16c-.64 0-1.27-.06-1.88-.18-.02-.03-.03-.06-.04-.09-.14-.43-.25-.86-.3-1.31q-.06-.435-.06-.9c0-.12 0-.25.02-.37.01-.47.08-.93.2-1.37q.09-.45.27-.87c.04-.14.1-.27.17-.4.15-.34.33-.67.53-.99.22-.32.46-.62.73-.9.32-.36.68-.69 1.09-.96.7-.51 1.5-.89 2.37-1.1.58-.16 1.19-.24 1.82-.24 2 0 3.79.8 5.09 2.09.05.05.11.11.16.18h.01c.14.15.27.3.4.47.37.47.68.98.92 1.54q.18.39.3.81l.03.11c.14.49.23 1 .25 1.53.02.15.03.31.03.47"
                  ></path>
                  <path
                    fill="#ffecb3"
                    d="M26.06 39.52c0 .41-.05.8-.16 1.17-.1.4-.25.78-.44 1.14-.03.06-.1.17-.1.17h-8.88a.1.1 0 0 1-.02-.04c-.12-.19-.22-.38-.3-.59-.2-.46-.32-.96-.36-1.48-.02-.12-.02-.25-.02-.37 0-.06 0-.13.01-.19.01-.44.07-.86.19-1.25.1-.36.23-.69.4-1.01 0 0 .01-.01.01-.02.12-.21.25-.42.4-.62.49-.66 1.14-1.2 1.89-1.55h.01c.24-.12.49-.22.75-.29h.01c.46-.14.96-.21 1.47-.21.59 0 1.16.09 1.68.28.19.05.37.13.55.22h.01c.86.41 1.59 1.05 2.09 1.85q.15.225.27.48c.04.07.08.15.11.22.23.52.37 1.09.41 1.69.01.05.01.1.01.16.01.08.01.16.01.24"
                  ></path>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M30 11H18c-3.9 0-7 3.1-7 7v12c0 3.9 3.1 7 7 7h12c3.9 0 7-3.1 7-7V18c0-3.9-3.1-7-7-7"
                  ></path>
                  <circle cx="31" cy="16" r="1" fill="#fff"></circle>
                  <circle
                    cx="24"
                    cy="24"
                    r="6"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
