import { ChannelBar } from "../components/DashBoardComponents/Channelbar"
import { ContentContainer } from "../components/DashBoardComponents/ContentContainer"
import { SideBar } from "../components/DashBoardComponents/Sidebar"

export const DashBoard = () => {
    return (
        <main className="flex h-screen">
            <SideBar/>
            <ChannelBar/>
            <ContentContainer/>
        </main>
    )


}