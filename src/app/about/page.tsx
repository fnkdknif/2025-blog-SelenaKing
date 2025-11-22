'use client'

import { motion } from 'motion/react'
import { ANIMATION_DELAY, INIT_DELAY } from '@/consts'
import LikeButton from '@/components/like-button'
import GithubSVG from '@/svgs/github.svg'

export default function Page() {
	const features = [
		{
			title: 'Github 存储',
			description: '网站基于 Github 仓库完全存储，所有内容版本可控',
			icon: '📦'
		},
		{
			title: '无服务器',
			description: '无后端，无 serverless function，纯静态站点',
			icon: '🚀'
		},
		{
			title: 'UI 编辑',
			description: '文章通过可视化 UI 直接编辑并提交到 Github 仓库',
			icon: '✏️'
		},
		{
			title: '开放协作',
			description: '所有用户都可以编辑，提交需要 Owner 的 Private Key',
			icon: '🔑'
		}
	]

	return (
		<div className='flex flex-col items-center justify-center px-6 pt-32 pb-12'>
			<div className='w-full max-w-[800px]'>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: INIT_DELAY }} className='mb-12 text-center'>
					<h1 className='mb-4 text-4xl font-bold'>关于本站</h1>
					<p className='text-secondary text-lg'>一个基于 Github 的现代化博客系统</p>
				</motion.div>

				<div className='grid gap-6 md:grid-cols-2'>
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: INIT_DELAY + ANIMATION_DELAY * (index + 1) }}
							className='card relative flex flex-col gap-3 p-6'>
							<div className='text-3xl'>{feature.icon}</div>
							<h3 className='text-xl font-semibold'>{feature.title}</h3>
							<p className='text-secondary leading-relaxed'>{feature.description}</p>
						</motion.div>
					))}
				</div>

				<div className='mt-8 flex items-center max-md:flex-col'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: INIT_DELAY + ANIMATION_DELAY * 5 }}
						className='card relative p-6'>
						<h3 className='mb-3 text-xl font-semibold'>技术栈</h3>
						<div className='flex flex-wrap gap-2'>
							{['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Github API'].map(tech => (
								<span key={tech} className='text-secondary rounded-lg bg-white/50 px-3 py-1.5 text-sm'>
									{tech}
								</span>
							))}
						</div>
					</motion.div>

					<motion.a
						href='https://github.com/fnkdknif'
						target='_blank'
						initial={{ opacity: 0, scale: 0.6 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: INIT_DELAY + ANIMATION_DELAY * 6 }}
						className='ml-auto flex h-[53px] w-[53px] items-center justify-center rounded-full border bg-white/40'>
						<GithubSVG />
					</motion.a>

					<LikeButton slug='open-source' className='mx-auto' />
				</div>
			</div>
		</div>
	)
}
