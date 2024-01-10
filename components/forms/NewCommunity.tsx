'use client'
import { ClerkObjectProps } from '@/lib/types/types'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from '../ui/textarea'
import { Input } from "@/components/ui/input"
import { createUser } from '@/lib/actions/user.actions'
import { usePathname, useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { createCommunity } from '@/lib/actions/community.actions'

const NewCommunity = ({ clerkId }: { clerkId: string }) => {
    const path = usePathname()
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    })
    const [rules, setRules] = useState([
        { title: '', info: '' }
    ])
    const addRule = () => {
        setRules((oldRules) => {
            return [...oldRules, { title: '', info: '' }]
        })
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const val = e.target.value
        setFormData((oldData) => {
            return { ...oldData, [name]: val }
        })
    }
    // const handleRuleChange = (idx: number, event: React.ChangeEvent<HTMLInputElement>) => {
    //     let data = [...rules]
    //     let name = event.target.name
    //     let val = event.target.value;
    //     data[idx][name] = val
    //     setRules(data)
    // }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log(formData)
        const formObject = {
            name: 'Mental Wellness',
            description: "Our forum is more than just a platform; it's a sanctuary where individuals can share, learn, and grow together in their mental health journeys. Whether you're seeking advice, wanting to share your story, or simply need a listening ear, you've found the right place.",
            public: true,
            status: 'active',
            rules: [
                {
                    title: 'Respect Privacy & Confidentiality',
                    description: 'What’s shared here, stays here. Do not divulge personal details or conversations from this forum elsewhere.'
                },
                {
                    title: "Foster a Supportive Environment",
                    description: "Be kind, empathetic, and understanding. Avoid judgmental or derogatory comments. Remember, everyone is fighting their own battle."
                },
                {
                    title: "No Medical Diagnoses or Treatment Advice",
                    description: "While sharing experiences and support is encouraged, refrain from providing medical diagnoses or specific treatment recommendations. Always recommend seeking professional advice."
                },
                {
                    title: "Zero Tolerance for Harassment",
                    description: "Bullying, harassment, or any form of abuse is strictly prohibited. This community is a harassment-free zone, and any such behavior will lead to immediate action."
                },
                {
                    title: "Stay on Topic and Be Mindful",
                    description: "Ensure your posts and replies are relevant to mental health and wellbeing. Be mindful of the impact your words may have on others and avoid triggering language or topics."
                },
            ],
        }
        const community = await createCommunity(formObject, clerkId, path)
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} action="">
                <label htmlFor="">Name</label>
                <input type="text" name='name' value={formData.name} onChange={(e) => handleInputChange(e)} />
                <label htmlFor="">Description</label>
                <input type="text" name='description' value={formData.description} onChange={(e) => handleInputChange(e)} />
                {/* {rules.map((rule, index) => (
                    <div key={index}>
                        <label htmlFor="">Rule: </label>
                        <input type="text" value={rule.title} onChange={(event) => handleRuleChange(index, event)} />
                    </div>
                ))} */}
                <button type='submit'>Submit</button>
            </form>
            <button onClick={() => addRule()}>Add Rule</button>
        </div>
    )
}

export default NewCommunity