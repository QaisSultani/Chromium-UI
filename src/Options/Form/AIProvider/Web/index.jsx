const Web = () => {
    const handleSave = () => {
        // code to save web
    }
    return (
        <div className="space-y-5">
            <p className="text-sm text-theme-text-gray-light">The API that powers ChatGPT webapp, free, but sometimes unstable</p>
            <div className="flex justify-center">
                <button className="hover:bg-theme-color bg-theme-color/90 text-white rounded-md px-5 py-1 text-sm" onClick={() => handleSave()}>Save</button>
            </div>
        </div>
    )
}
export default Web