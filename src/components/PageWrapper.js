import SideBar from "./SideBar"

const PageWrapper = ({ children }) => {
	return (
		<div className="flex">
			<SideBar />
			<div style={{ width: 'calc(100vw - 288px)' }} className="p-8 absolute top-0 right-0 overflow-auto">
				{children}
			</div>
		</div>
	)
}

export default PageWrapper