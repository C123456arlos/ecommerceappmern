// import axios from 'axios'
// import toast from 'react-hot-toast'
// import { create } from 'zustand'
// import { axiosInstance } from '../lib/axios'
// import { useAuthStore } from './useAuthStore'
// export const useChatStore = create((set, get) => ({
//     allContacts: [],
//     chats: [],
//     messages: [],
//     activeTab: 'chats',
//     selectedUser: null,
//     isUsersLoading: false,
//     isMessagesLoading: false,
//     isSoundEnabled: JSON.parse(localStorage.getItem('isSoundEnabled')) === false,
//     toggleSound: () => {
//         localStorage.setItem('isSoundEnabled', get().isSoundEnabled)
//         set({ isSoundEnabled: !get().isSoundEnabled })
//     },
//     setActiveTab: (tab) => set({ activeTab: tab }),
//     setSelectedUser: (selectedUser) => set({ selectedUser: selectedUser }),
//     getAllContacts: async () => {
//         set({ isUsersLoading: true })
//         try {
//             const res = await axios.get('http://localhost:3000/api/messages/contacts', {
//                 withCredentials: true
//             })
//             set({ allContacts: res.data })
//         } catch (error) {
//             toast.error(error.response.data.message)
//         } finally {
//             set({ isUsersLoading: false })
//         }
//     },
//     getMyChatPartners: async () => {
//         set({ isUsersLoading: true })
//         try {
//             const res = await axios.get('http://localhost:3000/api/messages/chats', {
//                 withCredentials: true
//             })
//             set({ chats: res.data })
//         } catch (error) {
//             toast.error(error?.response?.data?.message)
//         } finally {
//             set({ isUsersLoading: false })
//         }
//     },
//     getMessagesByUserId: async (userId) => {
//         set({ isMessagesLoading: true })
//         try {
//             const res = await axios.get(`http://localhost:3000/api/messages/${userId}`, {
//                 withCredentials: true
//             })

//             set({ messages: res.data })
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'something went wrong')
//         } finally {
//             set({ isMessagesLoading: false })
//         }
//     },
//     // getMessagesByUserId: async (userId) => {
//     //     set({ isMessagesLoading: true });
//     //     try {
//     //         // const res = await axiosInstance.get(`/messages/${userId}`);
//     //         const res = await axios.get(`http://localhost:3000/api/messages/${userId}`)
//     //         set({ messages: res.data });
//     //     } catch (error) {
//     //         toast.error(error.response?.data?.message || "Something went wrong");
//     //     } finally {
//     //         set({ isMessagesLoading: false });
//     //     }
//     // },
//     // sendMessage: async (messageData) => {
//     //     const { selectedUser, messages } = get()
//     //     try {
//     //         const res = await axios.post(`http://localhost:3000/messages/send/${selectedUser._id}`, messageData, {
//     //             withCredentials: true
//     //         })
//     //         set({ messages: message.concat(res.data) })
//     //     } catch (error) {
//     //         toast.error(error.response?.data?.message || 'something went wrong')
//     //     }
//     // }
//     sendMessage: async (messageData) => {
//         const { selectedUser, messages } = get();
//         // const { authUser } = useAuthStore.getState();
//         const { authUser } = useAuthStore.getState()

//         const tempId = `temp-${Date.now()}`
//         // const optimisticMessage = {
//         //     _id: tempId,
//         //     senderId: authUser._id,
//         //     receiverId: selectedUser._id,
//         //     text: messageData.text,
//         //     image: messageData.image,
//         //     createdAt: new Date().toISOString(),
//         //     isOptimistic: true,
//         // };


//         const optimisticMessage = {
//             _id: tempId,
//             senderId: authUser._id,
//             receiverId: selectedUser._id,
//             image: messageData.image,
//             createdAt: new Date().toISOString(),
//             isOptimistic: true
//         }

//         set({ messages: [...messages, optimisticMessage] })

//         // set({
//         //     messages: [...messages, optimisticMessage]
//         // });

//         try {
//             const res = await axios.post(`http://localhost:3000/api/messages/send/${selectedUser._id}`, messageData, {
//                 withCredentials: true
//             });
//             set({ messages: messages.concat(res.data) });
//         } catch (error) {
//             // set({ messages: messages });
//             set({ messages: messages })
//             toast.error(error.response?.data?.message || "Something went wrong");
//         }
//     },
// }))









// import { create } from "zustand";
// import { axiosInstance } from "../lib/axios";
// import toast from "react-hot-toast";
// import { useAuthStore } from "./useAuthStore";

// export const useChatStore = create((set, get) => ({
//     allContacts: [],
//     chats: [],
//     messages: [],
//     activeTab: "chats",
//     selectedUser: null,
//     isUsersLoading: false,
//     isMessagesLoading: false,
//     isSoundEnabled: JSON.parse(localStorage.getItem("isSoundEnabled")) === true,

//     toggleSound: () => {
//         localStorage.setItem("isSoundEnabled", !get().isSoundEnabled);
//         set({ isSoundEnabled: !get().isSoundEnabled });
//     },

//     setActiveTab: (tab) => set({ activeTab: tab }),
//     setSelectedUser: (selectedUser) => set({ selectedUser }),

//     getAllContacts: async () => {
//         set({ isUsersLoading: true });
//         try {
//             const res = await axios.get("https://localhost:3000/api/messages/contacts");
//             set({ allContacts: res.data });
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally {
//             set({ isUsersLoading: false });
//         }
//     },
//     getMyChatPartners: async () => {
//         set({ isUsersLoading: true });
//         try {
//             const res = await axios.get("https://localhost:3000/api/messages/chats");
//             set({ chats: res.data });
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally {
//             set({ isUsersLoading: false });
//         }
//     },

//     getMessagesByUserId: async (userId) => {
//         set({ isMessagesLoading: true });
//         try {
//             const res = await axios.get(`https://localhost:3000/api/messages/${userId}`);
//             set({ messages: res.data });
//         } catch (error) {
//             toast.error(error.response?.data?.message || "Something went wrong");
//         } finally {
//             set({ isMessagesLoading: false });
//         }
//     },

//     sendMessage: async (messageData) => {
//         const { selectedUser, messages } = get();
//         const { authUser } = useAuthStore.getState();

//         const tempId = `temp-${Date.now()}`;

//         const optimisticMessage = {
//             _id: tempId,
//             senderId: authUser._id,
//             receiverId: selectedUser._id,
//             text: messageData.text,
//             image: messageData.image,
//             createdAt: new Date().toISOString(),
//             isOptimistic: true, // flag to identify optimistic messages (optional)
//         };
//         // immidetaly update the ui by adding the message
//         set({ messages: [...messages, optimisticMessage] });

//         try {
//             const res = await axios.post(`https://localhost:3000/api/messages/send/${selectedUser._id}`, messageData);
//             set({ messages: messages.concat(res.data) });
//         } catch (error) {
//             // remove optimistic message on failure
//             set({ messages: messages });
//             toast.error(error.response?.data?.message || "Something went wrong");
//         }
//     },

//     subscribeToMessages: () => {
//         const { selectedUser, isSoundEnabled } = get();
//         if (!selectedUser) return;

//         const socket = useAuthStore.getState().socket;

//         socket.on("newMessage", (newMessage) => {
//             const isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id;
//             if (!isMessageSentFromSelectedUser) return;

//             const currentMessages = get().messages;
//             set({ messages: [...currentMessages, newMessage] });

//             if (isSoundEnabled) {
//                 const notificationSound = new Audio("/sounds/notification.mp3");

//                 notificationSound.currentTime = 0; // reset to start
//                 notificationSound.play().catch((e) => console.log("Audio play failed:", e));
//             }
//         });
//     },

//     unsubscribeFromMessages: () => {
//         const socket = useAuthStore.getState().socket;
//         socket.off("newMessage");
//     },
// }));





















// import { create } from "zustand";
// import { axiosInstance } from "../lib/axios";
// import toast from "react-hot-toast";
// import { useAuthStore } from "./useAuthStore";

// const notificationSound = new Audio('/sounds/notification.mp3')

// export const useChatStore = create((set, get) => ({
//     allContacts: [],
//     chats: [],
//     messages: [],
//     activeTab: "chats",
//     selectedUser: null,
//     isUsersLoading: false,
//     isMessagesLoading: false,
//     isSoundEnabled: JSON.parse(localStorage.getItem("isSoundEnabled")) === true,
//     messageHandler: null,

//     toggleSound: () => {
//         localStorage.setItem("isSoundEnabled", !get().isSoundEnabled);
//         set({ isSoundEnabled: !get().isSoundEnabled });
//     },

//     setActiveTab: (tab) => set({ activeTab: tab }),
//     setSelectedUser: (selectedUser) => set({ selectedUser }),

//     getAllContacts: async () => {
//         set({ isUsersLoading: true });
//         try {
//             const res = await axiosInstance.get("/messages/contacts");
//             set({ allContacts: res.data });
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally {
//             set({ isUsersLoading: false });
//         }
//     },
//     getMyChatPartners: async () => {
//         set({ isUsersLoading: true });
//         try {
//             const res = await axiosInstance.get("/messages/chats");

//             console.log("CHAT RESPONSE:", res.data);
//             console.log(Array.isArray(res.data));
//             set({ chats: res.data });
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally {
//             set({ isUsersLoading: false });
//         }
//     },

//     // getMessagesByUserId: async (userId) => {
//     //     set({ isMessagesLoading: true });
//     //     try {
//     //         const res = await axiosInstance.get(`/messages/${userId}`);
//     //         set({ messages: res.data });
//     //     } catch (error) {
//     //         toast.error(error.response?.data?.message || "Something went wrong");
//     //     } finally {
//     //         set({ isMessagesLoading: false });
//     //     }
//     // },
//     getMessagesByUserId: async (userId) => {
//         set({ isMessagesLoading: true });

//         console.log("GET MESSAGES CALLED");
//         console.log("USER ID:", userId);

//         try {
//             const res = await axiosInstance.get(`/messages/${userId}`);

//             console.log("API RESPONSE:", res);
//             console.log("API RESPONSE DATA:", res.data);
//             console.log("IS ARRAY:", Array.isArray(res.data));

//             set({ messages: res.data });

//         } catch (error) {

//             console.log("MESSAGE FETCH ERROR:", error);
//             console.log("ERROR RESPONSE:", error.response);
//             console.log("ERROR DATA:", error.response?.data);

//             toast.error(
//                 error.response?.data?.message || "Something went wrong"
//             );

//         } finally {
//             set({ isMessagesLoading: false });
//         }
//     },

//     sendMessage: async (messageData) => {
//         const { selectedUser, messages } = get();
//         const { authUser } = useAuthStore.getState();

//         const tempId = `temp-${Date.now()}`;

//         const optimisticMessage = {
//             _id: tempId,
//             senderId: authUser._id,
//             receiverId: selectedUser._id,
//             text: messageData.text,
//             image: messageData.image,
//             createdAt: new Date().toISOString(),
//             isOptimistic: true, // flag to identify optimistic messages (optional)
//         };
//         // immidetaly update the ui by adding the message
//         set({ messages: [...messages, optimisticMessage] });

//         try {
//             const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
//             // set({ messages: messages.concat(res.data) });
//             set((state) => ({
//                 messages: [...state.messages, res.data],
//             }));
//         } catch (error) {
//             // remove optimistic message on failure
//             set({ messages: messages });
//             toast.error(error.response?.data?.message || "Something went wrong");
//         }
//     },
//     // subscribeToMessages: () => {
//     //     const { selectedUser, setSelectedUSer } = get()
//     //     if (!selectedUser) return
//     //     const socket = useAuthStore.getState().socket
//     //     socket.on('newMessge', (newMessage) => {
//     //         const currentMessages = get().messages
//     //         set({ messages: { ...currentMessages, newMessage } })
//     //         if (isSoundEnabled) {
//     //             notificationSound.play().catch((e) => console.log('audio play failed', e))
//     //         }
//     //     })
//     // },
//     // subscribeToMessages: () => {
//     //     const { selectedUser } = get();
//     //     if (!selectedUser) return;

//     //     const socket = useAuthStore.getState().socket;

//     //     socket.on("newMessage", (newMessage) => {

//     //         // only append messages from currently opened chat
//     //         if (newMessage.senderId !== selectedUser._id) return;

//     //         set({
//     //             messages: [...get().messages, newMessage],
//     //         });
//     //     });
//     // },











//     // unsubscribeFromMessages: () => {
//     //     const socket = useAuthStore.getState().socket;
//     //     // socket.off("newMessage");
//     //     socket.off("newMessage", messageHandler);
//     // },



//     subscribeToMessages: () => {
//         const { selectedUser } = get();
//         if (!selectedUser) return;

//         const socket = useAuthStore.getState().socket;

//         const messageHandler = (newMessage) => {

//             if (newMessage.senderId !== selectedUser._id) return;

//             set({
//                 messages: [...get().messages, newMessage],
//             });
//         };

//         // save handler in zustand state
//         set({ messageHandler });

//         socket.on("newMessage", messageHandler);
//     },

//     unsubscribeFromMessages: () => {
//         const socket = useAuthStore.getState().socket;

//         const { messageHandler } = get();

//         if (messageHandler) {
//             socket.off("newMessage", messageHandler);
//         }
//     },
// }));



import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";

const notificationSound = new Audio('/sounds/notification.mp3')

export const useChatStore = create((set, get) => ({
    allContacts: [],
    chats: [],
    messages: [],
    activeTab: "chats",
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,
    isSoundEnabled: JSON.parse(localStorage.getItem("isSoundEnabled")) === true,

    toggleSound: () => {
        localStorage.setItem("isSoundEnabled", !get().isSoundEnabled);
        set({ isSoundEnabled: !get().isSoundEnabled });
    },

    setActiveTab: (tab) => set({ activeTab: tab }),
    setSelectedUser: (selectedUser) => set({ selectedUser }),

    getAllContacts: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/contacts");
            set({ allContacts: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },
    getMyChatPartners: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/chats");
            set({ chats: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    getMessagesByUserId: async (userId) => {
        set({ isMessagesLoading: true });
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data });
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            set({ isMessagesLoading: false });
        }
    },

    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        const { authUser } = useAuthStore.getState();

        const tempId = `temp-${Date.now()}`;

        const optimisticMessage = {
            _id: tempId,
            senderId: authUser._id,
            receiverId: selectedUser._id,
            text: messageData.text,
            image: messageData.image,
            createdAt: new Date().toISOString(),
            isOptimistic: true,
        };

        set({ messages: [...messages, optimisticMessage] });

        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
            set({ messages: messages.concat(res.data) });
        } catch (error) {

            set({ messages: messages });
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    },
    subscribeToMessages: () => {
        const { selectedUser, isSoundEnabled } = get()
        if (!selectedUser) return
        const socket = useAuthStore.getState().socket
        socket.on('newMessage', (newMessage) => {
            const isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id
            if (!isMessageSentfromSelectedUser) return
            const currentMessages = get().messages
            set({ messages: [...currentMessages, newMessage] })
            if (isSoundEnabled) {
                notificationSound.currentTime = 0
                notificationSound.play().catch((e) => console.log('audio play', e))
            }
        })
    },
    unsubscribeToMessages: () => {
        const socket = useAuthStore.getState().socket
        socket.off('newMessage')
    }
}));
