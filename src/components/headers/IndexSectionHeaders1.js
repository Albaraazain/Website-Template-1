import React from 'react';

export default function IndexSectionHeaders1() {
    return (
        <React.Fragment>
            <>
                <section className="overflow-hidden" style={{background: 'url(gradia-assets/images/hero/bg.png) no-repeat', backgroundSize: 'cover'}}>
  <section>
    <div className="flex items-center justify-between px-8 py-5">
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto mr-14">
            <a href="#">
              <img src="gradia-assets/logos/gradia-name-white.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto hidden lg:block">
            <ul className="flex items-center mr-10">
              <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg"><a href="#">Features</a></li>
              <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg"><a href="#">Solutions</a></li>
              <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg"><a href="#">Resources</a></li>
              <li className="font-heading text-white hover:text-gray-200 text-lg"><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="w-auto hidden lg:block">
            <button className="group relative font-heading block py-2 px-5 text-lg text-white border-2 border-white overflow-hidden rounded-10">
              <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
              <p className="relative z-10 group-hover:text-gray-800">Start Free Trial</p>
            </button>
          </div>
          <div className="w-auto lg:hidden">
            <a href="#">
              <svg className="navbar-burger text-gray-800" width={51} height={51} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width={56} height={56} rx={28} fill="currentColor" />
                <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
      <nav className="relative z-10 px-9 py-8 bg-white h-full">
        <div className="flex flex-wrap justify-between h-full">
          <div className="w-full">
            <div className="flex items-center justify-between -m-2">
              <div className="w-auto p-2">
                <a className="inline-block" href="#">
                  <img src="gradia-assets/logos/gradia-name-black.svg" alt="" />
                </a>
              </div>
              <div className="w-auto p-2">
                <a className="navbar-burger" href="#">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center py-8 w-full">
            <ul>
              <li className="mb-12"><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">Features</a></li>
              <li className="mb-12"><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">Solutions</a></li>
              <li className="mb-12"><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">Resources</a></li>
              <li><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-end w-full">
            <div className="flex flex-wrap">
              <div className="w-full">
                <button className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                  <div className="py-2 px-5 rounded-10">
                    <p>Login</p>
                  </div>
                </button>
              </div>
              <div className="w-full">
                <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                  <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500" />
                  <div className="py-2 px-5 bg-white rounded-lg">
                    <p className="relative z-10">Start Free Trial</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between -m-6 pt-32 pb-40">
      <div className="w-full lg:w-5/12 xl:w-1/2 p-6">
        <p className="mb-5 font-heading text-gray-400 font-medium text-xl">Grow fast, get things done with ease</p>
        <h1 className="mb-14 font-heading text-7xl md:text-9xl xl:text-11xl text-white font-bold">Manage remote team, anywhere, anytime.</h1>
        <div className="flex flex-wrap -m-3 mb-20">
          <div className="w-full lg:w-auto p-3">
            <button className="font-heading w-full px-6 py-4 text-base text-gray-900 bg-white hover:bg-gray-100 rounded-md">Start 14 Days Free Trial</button>
          </div>
          <div className="w-full lg:w-auto p-3">
            <button className="font-heading w-full px-6 py-4 text-base text-white bg-transparent border border-gray-500 hover:border-gray-600 rounded-md">How it works</button>
          </div>
        </div>
        <div className="lg:max-w-md">
          <div className="flex flex-wrap -m-3">
            <div className="w-auto p-3">
              <img className="w-14 h-14" src="gradia-assets/images/hero/avatar-man.png" alt="" />
            </div>
            <div className="flex-1 p-3">
              <p className="mb-4 text-gray-300 text-base">“You made it so simple. My new team is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
              <p className="font-heading text-white text-base">Denny Jones, founder of Growthio</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-7/12 xl:w-1/2 p-6">
        <div className="max-w-max mx-auto">
          <div className="flex flex-wrap justify-center -m-3 mb-3">
            <div className="w-full p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle.png" alt="" />
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Albert Flores</p>
                    <p className="mb-2 text-sm text-gray-500">Software Engineer</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Wyoming, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3">
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle2.png" alt="" />
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Darlene Robertson</p>
                    <p className="mb-2 text-sm text-gray-500">Software Tester</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">New York, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle3.png" alt="" />
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Kristin Watson</p>
                    <p className="mb-2 text-sm text-gray-500">Project Manager</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Pennsylvania, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3 xl:-ml-20">
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle4.png" alt="" />
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Guy Hawkins</p>
                    <p className="mb-2 text-sm text-gray-500">Scrum Master</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">North Carolina, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle5.png" alt="" />
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Annette Black</p>
                    <p className="mb-2 text-sm text-gray-500">Software Engineer</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">North Dakota, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center max-w-max -m-3">
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle.png" alt="" />
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Robert Fox</p>
                    <p className="mb-2 text-sm text-gray-500">UI/UX Designer</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Maine, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-3">
              <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                <div className="flex flex-wrap -m-2">
                  <div className="w-auto p-2">
                    <img src="gradia-assets/images/hero/avatar-circle2.png" alt="" />
                  </div>
                  <div className="w-auto p-2">
                    <p className="font-heading text-base text-gray-900">Cody Fisher</p>
                    <p className="mb-2 text-sm text-gray-500">Ethical Hacker</p>
                    <div className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                      <svg className="mr-1" width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z" stroke="#71717A" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-xs text-gray-700 font-medium">Alaska, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

