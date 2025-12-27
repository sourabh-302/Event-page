  <div className="w-full flex justify-center">
      <div className="w-[1224px] bg-white rounded-[35px] p-8 shadow-sm">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6">Create Post</h2>

        {/* Title + Select Event */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Post title will be here..."
            className="flex-1 h-[60px] px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            className="w-[278px] h-[60px] px-6 rounded-full border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Select Event</option>
            <option>Event 1</option>
            <option>Event 2</option>
          </select>
        </div>

        {/* Description */}
        <textarea
          placeholder="Post description will be here..."
          className="w-full h-[263px] p-6 rounded-[35px] border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        />

        {/* Footer Buttons */}
        <div className="flex items-center justify-between">
          <button className="px-6 py-3 bg-gray-200 text-gray-600 rounded-full font-medium">
            Select Photos
          </button>

          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
            Create Post
          </button>
        </div>
      </div>
    </div>
  