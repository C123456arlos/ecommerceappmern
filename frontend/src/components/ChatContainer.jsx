// import React, { useEffect, useRef } from 'react'
// import { useChatStore } from '../store/useChatStore'
// import { useAuthStore } from '../store/useAuthStore'
// import ChatHeader from './ChatHeader'
// import NoChatHistoryPlaceholder from './NoChatHistoryPlalceholder'
// import MessagesLoadingSkeleton from './MessagesLoadingSkeleton'
// import MessageInput from './MessageInput'

// const ChatContainer = () => {

//     const { selectedUser, getMessagesByUserId, messages, isMessagesLoading, subscribeToMessages, unsubscribeFromMessages } = useChatStore()
//     const messageEndRef = useRef(null)
//     const { authUser } = useAuthStore()
//     console.log("CHAT CONTAINER RENDER");
//     console.log("selectedUser:", selectedUser);
//     console.log("authUser:", authUser);
//     console.log("messages:", messages);
//     console.log("messages length:", messages?.length);
//     console.log("isMessagesLoading:", isMessagesLoading);
//     console.log(messages)
//     useEffect(() => {

//         if (messageEndRef.current) {
//             messageEndRef.current.scrollIntoView({ behavior: 'smooth' })
//         }
//     }, [messages])

//     // useEffect(() => {
//     //     getMessagesByUserId(selectedUser._id)
//     //     subscribeToMessages()
//     //     return () => unsubscribeFromMessages()
//     // }, [selectedUser, getMessagesByUserId, subscribeToMessages, unsubscribeFromMessages])

//     return (
//         <>
//             <ChatHeader></ChatHeader>
//             <div className='flex-1 px-6 overflow-y-auto py-8'>
//                 {messages.length > 0 && !isMessagesLoading ? (<div className='max-w-xl mx-auto space-y-6'>
//                     {messages.map((msg) => (
//                         <div key={msg._id} className={`chat ${msg.senderId === authUser._id ? 'chat-end' : 'chat-start'}`}>
//                             <div className={`chat-bubble relative ${msg.senderId === authUser._id ?
//                                 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-200'}`}>
//                                 {msg.image && (<img src={msg.image} alt='shared' className='rounded-lg h-48 object-cover'></img>)}
//                                 {msg.text && <p className='mt-2'>{msg.text}</p>}
//                                 <p className='text-xs mt-1 opacity-75 flex items-center gap-1'>
//                                     {new Date(msg.createdAt).toLocaleTimeString(undefined, {
//                                         hour: '2-digit',
//                                         minute: '2-digit',
//                                         hour12: false
//                                     })}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>) : isMessagesLoading ? (<MessagesLoadingSkeleton></MessagesLoadingSkeleton>) : (
//                     (<>  <NoChatHistoryPlaceholder name={selectedUser.fullName}>

//                     </NoChatHistoryPlaceholder></>))
//                 }
//                 <div ref={messageEndRef}></div>
//             </div>
//             <MessageInput></MessageInput>
//         </>
//     )
// }

// export default ChatContainer






import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";

import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

function ChatContainer() {
    const {
        selectedUser,
        getMessagesByUserId,
        messages,
        isMessagesLoading,
        subscribeToMessages,
        unsubscribeFromMessages,
    } = useChatStore();
    const { authUser } = useAuthStore();
    const messageEndRef = useRef(null);

    // useEffect(() => {
    //     getMessagesByUserId(selectedUser._id);
    //     subscribeToMessages();

    //     // clean up
    //     return () => unsubscribeFromMessages();
    // }, [selectedUser, getMessagesByUserId, subscribeToMessages, unsubscribeFromMessages]);
    // ;



    // useEffect(() => {
    //     if (!selectedUser?._id) return;

    //     const initializeChat = async () => {
    //         await getMessagesByUserId(selectedUser._id);


    //         subscribeToMessages();
    //     };

    //     initializeChat();

    //     return () => {
    //         unsubscribeFromMessages();
    //     };
    // }, [selectedUser?._id]);







    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <>
            <ChatHeader />
            <div className="flex-1 px-6 overflow-y-auto py-8">
                {messages.length > 0 && !isMessagesLoading ? (
                    <div className="max-w-3xl mx-auto space-y-6">
                        {messages.map((msg) => (
                            <div
                                key={msg._id}
                                className={`chat ${msg.senderId === authUser._id ? "chat-end" : "chat-start"}`}
                            >
                                <div
                                    className={`chat-bubble relative ${msg.senderId === authUser._id
                                        ? "bg-cyan-600 text-white"
                                        : "bg-slate-800 text-slate-200"
                                        }`}
                                >
                                    {msg.image && (
                                        <img src={msg.image} alt="Shared" className="rounded-lg h-48 object-cover" />
                                    )}
                                    {msg.text && <p className="mt-2">{msg.text}</p>}
                                    <p className="text-xs mt-1 opacity-75 flex items-center gap-1">
                                        {new Date(msg.createdAt).toLocaleTimeString(undefined, {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div ref={messageEndRef} />
                    </div>
                ) : isMessagesLoading ? (
                    <MessagesLoadingSkeleton />
                ) : (
                    <></>
                )}
            </div>

            <MessageInput />
        </>
    );
}

export default ChatContainer;






// 6:52