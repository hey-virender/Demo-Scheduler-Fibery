import React, { useRef, useState } from "react";

const Details = ({ onSubmit }) => {
  const [addGuest, setAddGuest] = useState(false);
  const [guestEmails, setGuestEmails] = useState([]);
  const [selectedWorkInfo, setSelectedWorkInfo] = useState([]);
  const [isWorkSelected, setIsWorkSelected] = useState(true);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [isInterestsSelected, setIsInterestsSelected] = useState(true);
  const [meetingPreparation, setMeetingPreparation] = useState();
  const [workspaceName, setWorkspaceName] = useState();
  let name = useRef();
  let email = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (selectedWorkInfo.length === 0 || selectedInterests.length === 0) {
      setIsWorkSelected(selectedWorkInfo.length === 0 ? false : true);
      setIsInterestsSelected(selectedInterests.length === 0 ? false : true);
    } else {
      const formData = {
        name,
        email,
        guestEmails,
        selectedWorkInfo,
        selectedInterests,
        meetingPreparation,
        workspaceName,
      };
      onSubmit(formData);
      name = "";
      email = "";
    }
  };
  const handleWorkInfoChange = (work) => {
    const isChecked = work.checked;
    const value = work.value;
    const updatedWorkInfo = [...selectedWorkInfo];

    if (isChecked) {
      updatedWorkInfo.push(value);
    } else {
      const index = updatedWorkInfo.indexOf(value);
      if (index !== -1) {
        updatedWorkInfo.splice(index, 1);
      }
    }
    setSelectedWorkInfo(updatedWorkInfo);
  };
  const handleInterestsChange = (interest) => {
    const isChecked = interest.checked;
    const value = interest.value;
    const updatedInterests = [...selectedInterests];

    if (isChecked) {
      updatedInterests.push(value);
    } else {
      const index = updatedInterests.indexOf(value);
      if (index !== -1) {
        updatedInterests.splice(index, 1);
      }
    }
    setSelectedInterests(updatedInterests);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className=" max-h-[95%] ml-8 overflow-y-auto  mobile:mb-[25%]"
    >
      <h1 className="font-bold mt-5">Enter Details</h1>
      <fieldset className="flex-col">
        <legend htmlFor="name" className="block text-xs font-bold mt-2 mb-1">
          Name *
        </legend>
        <input
          className="border border-1 rounded border-gray-500 w-[70%] h-8"
          type="text"
          id="name"
          ref={name}
          required
        ></input>
        <legend htmlFor="email" className="block text-xs font-bold mt-2 mb-1">
          Email *
        </legend>
        <input
          className="border border-1 rounded border-gray-500 w-[70%] h-8"
          type="email"
          id="email"
          ref={email}
          required
        ></input>
        {!addGuest ? (
          <button
            className="block text-[11px] border border-[#0060d4] text-[#0060d4] py-1 rounded-full w-20 my-3 border-[0.6px] "
            onClick={() => {
              setAddGuest(true);
            }}
          >
            Add Guests
          </button>
        ) : (
          <fieldset className="mt-3 ">
            <legend
              htmlFor="guest-email"
              className="block text-xs font-bold mb-2"
            >
              Guest Email{"(s)"}
            </legend>
            <textarea
              className="border border-1 rounded border-gray-500 w-[70%] h-16"
              id="guest-email"
              onChange={(e) => setGuestEmails(e.target.value)}
            ></textarea>
            <p className="text-[11px]">
              Notify up to 10 additional guests of the scheduled event.
            </p>
          </fieldset>
        )}
      </fieldset>
      <fieldset className="text-[12px] mt-3">
        <label className="block text-xs font-bold mb-2 ">
          I want Fibery to work for: *
        </label>
        <label className="block flex items-center" htmlFor="myself">
          <input
            type="checkbox"
            name="work-info"
            value="1"
            id="myself"
            onChange={(e) => {
              handleWorkInfoChange(e.target);
            }}
          ></input>
          🥕 MySelf
        </label>

        <label htmlFor="10people" className="block flex items-center">
          <input
            type="checkbox"
            name="work-info"
            value="10"
            id="10people"
            onChange={(e) => {
              handleWorkInfoChange(e.target);
            }}
          ></input>
          <div>👩🏽‍🤝‍👩🏻 &lt; 10 people</div>
        </label>

        <label htmlFor="10-50" className="block flex items-center">
          {" "}
          <input
            type="checkbox"
            name="work-info"
            value="10-50"
            id="10-50"
            onChange={(e) => {
              handleWorkInfoChange(e.target);
            }}
          ></input>
          <div>🦄 10-50 people</div>
        </label>

        <label htmlFor="50+" className="block flex items-center">
          <input
            type="checkbox"
            name="work-info"
            value="50+"
            id="50+"
            onChange={(e) => {
              handleWorkInfoChange(e.target);
            }}
          ></input>
          <div>🦅 50+ people</div>
        </label>
        {!isWorkSelected && (
          <p className="text-red-400">Select atleast one option</p>
        )}
      </fieldset>
      <fieldset className="text-[12px] mt-3">
        <label className="block text-xs font-bold max-w-[60%] mb-2">
          Please choose up to three options. You are more interested in: *
        </label>

        <label htmlFor="strategy" className="block flex items-center">
          <input
            type="checkbox"
            name="interest"
            value="strategy"
            id="strategy"
            onChange={(e) => {
              handleInterestsChange(e.target);
            }}
          ></input>
          🗻 Strategy
        </label>

        <label htmlFor="product-management" className="block flex items-center">
          <input
            type="checkbox"
            name="interest"
            value="product-management"
            id="product-management"
            onChange={(e) => {
              handleInterestsChange(e.target);
            }}
          ></input>
          <div>🌞 Product Management</div>
        </label>

        <label htmlFor="engineering" className="block flex items-center">
          <input
            type="checkbox"
            name="interest"
            value="engineering"
            id="engineering"
            onChange={(e) => {
              handleInterestsChange(e.target);
            }}
          ></input>
          <div>💻 Engineering</div>
        </label>

        <label
          htmlFor="feedback-management"
          className="block flex items-center"
        >
          <input
            type="checkbox"
            name="interest"
            value="feedback-management"
            id="feedback-management"
            onChange={(e) => {
              handleInterestsChange(e.target);
            }}
          ></input>
          <div>🎣 Feedback management</div>
        </label>

        <label htmlFor="something-else" className="block flex items-center">
          {" "}
          <input
            type="checkbox"
            name="interest"
            value="something-else"
            id="something-else"
            onChange={(e) => {
              handleInterestsChange(e.target);
            }}
          ></input>
          <div>❓ Something else</div>
        </label>
        {!isInterestsSelected && (
          <p className="text-red-400">Select atleast one option</p>
        )}
      </fieldset>
      <fieldset className="mt-3">
        <label className=" block text-xs font-bold max-w-[60%] mb-2">
          Please, share anything that will help prepare for our meeting.
        </label>
        <textarea
          className="border border-1 rounded border-gray-500 w-[70%]"
          onChange={(e) => setMeetingPreparation(e.target.value)}
        ></textarea>
      </fieldset>
      <fieldset className="mt-3">
        <label className="block text-xs font-bold max-w-[60%] mb-2">
          Please, share with us the name of your Fibery workspace {"(if any)"}
        </label>
        <textarea
          className="border border-1 rounded border-gray-500 w-[70%]"
          onChange={(e) => setWorkspaceName(e.target.value)}
        ></textarea>
      </fieldset>
      <p className="w-[70%] text-[10px]">
        By proceeding, you confirm that you have read and agree to{" "}
        <span className="font-semibold text-[#005fe6]">
          Calendly's Terms of Use
        </span>{" "}
        and{" "}
        <span className="font-semibold text-[#005fe6]">Privacy Notice.</span>{" "}
      </p>
      <button
        className="my-3 bg-[#005fe6] text-white rounded-full text-xs py-2 px-5 font-bold"
        type="submit"
      >
        Schedule Event
      </button>
    </form>
  );
};

export default Details;
