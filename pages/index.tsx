import { Layout } from '@/components/layout'
import { NowPlaying } from '@/components/now-playing'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from '@/components/ui/context-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from '@/components/ui/menubar'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import {
  Album,
  CreditCard,
  Globe,
  Keyboard,
  LayoutGrid,
  Library,
  ListMusic,
  LogOut,
  Mail,
  MessageSquare,
  Mic,
  Mic2,
  Music,
  Music2,
  PlayCircle,
  Plus,
  PlusCircle,
  Podcast,
  Radio,
  Settings,
  User,
  UserPlus,
  Users
} from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'

const playlists = [
  'Recently Added',
  'Recently Played',
  'Top Songs',
  'Top Albums',
  'Top Artists',
  'Logic Discography',
  'Bedtime Beats',
  'Feeling Happy',
  'I miss Y2K Pop',
  'Runtober',
  'Mellow Days',
  'Eminem Essentials'
]

interface Album {
  name: string
  artist: string
  cover: string
}

const listenNowAlbums: Album[] = [
  {
    name: 'Async Awakenings',
    artist: 'Nina Netcode',
    cover:
      'https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=300&dpr=2&q=80'
  },
  {
    name: 'The Art of Reusability',
    artist: 'Lena Logic',
    cover:
      'https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=300&dpr=2&q=80'
  },
  {
    name: 'Stateful Symphony',
    artist: 'Beth Binary',
    cover:
      'https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80'
  },
  {
    name: 'React Rendezvous',
    artist: 'Ethan Byte',
    cover:
      'https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?w=300&dpr=2&q=80'
  }
]

const madeForYouAlbums: Album[] = [
  {
    name: 'Async Awakenings',
    artist: 'Nina Netcode',
    cover:
      'https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?w=300&dpr=2&q=80'
  },
  {
    name: 'Stateful Symphony',
    artist: 'Beth Binary',
    cover:
      'https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80'
  },
  {
    name: 'Stateful Symphony',
    artist: 'Beth Binary',
    cover:
      'https://images.unsplash.com/photo-1598062548091-a6fb6a052562?w=300&dpr=2&q=80'
  },
  {
    name: 'The Art of Reusability',
    artist: 'Lena Logic',
    cover:
      'https://images.unsplash.com/photo-1626759486966-c067e3f79982?w=300&dpr=2&q=80'
  },
  {
    name: 'Thinking Components',
    artist: 'Lena Logic',
    cover:
      'https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=300&dpr=2&q=80'
  },
  {
    name: 'Functional Fury',
    artist: 'Beth Binary',
    cover:
      'https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80'
  },
  {
    name: 'React Rendezvous',
    artist: 'Ethan Byte',
    cover:
      'https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?w=300&dpr=2&q=80'
  }
]

const IndexPage = () => {
  return (
    <Layout>
      <div className="overflow-hidden rounded-md bg-gradient-to-b to-indigo-700">
        <div className="">
          <div className="rounded-md bg-white transition-all dark:bg-slate-900">
            <div className="grid grid-cols-1 xl:grid-cols-1">
              <div className="col-span-3 xl:col-span-4">
                <div className="h-full px-8 py-6">
                  <Tabs
                    defaultValue="now-playing"
                    className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger
                          value="now-playing"
                          className="relative">
                          Now Playing <DemoIndicator className="right-2" />
                        </TabsTrigger>
                        <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent
                      value="now-playing"
                      className="border-none p-0">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Now Playing
                          </h2>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <DemoIndicator className="left-24 right-auto top-32 z-30" />
                        <div className="relative flex space-x-4">
                          <NowPlaying />
                        </div>
                      </div>
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Other People Playing
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <DemoIndicator className="left-16 right-auto top-32 z-30" />
                        {/* <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {madeForYouAlbums.map(album => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio={1 / 1}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea> */}
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="top-rated"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed border-slate-200 dark:border-slate-700">
                        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                          <Podcast className="h-10 w-10 text-slate-400" />
                          <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
                            No episodes added
                          </h3>
                          <p className="mb-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
                            You have not added any podcasts. Add one below.
                          </p>
                          <Dialog>
                            <DialogTrigger>
                              <Button
                                size="sm"
                                className="relative">
                                <Plus className="mr-2 h-4 w-4" />
                                Add Podcast
                                <DemoIndicator className="-right-1 -top-1 z-30" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Add Podcast</DialogTitle>
                                <DialogDescription>
                                  Copy and paste the podcast feed URL to import.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="url">Podcast URL</Label>
                                  <Input
                                    id="url"
                                    placeholder="https://example.com/feed.xml"
                                  />
                                </div>
                              </div>
                              <DialogFooter>
                                <Button>Import Podcast</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album
  aspectRatio?: number
}

function AlbumArtwork({
  album,
  aspectRatio = 3 / 4,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div
      className={cn('space-y-3', className)}
      {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <AspectRatio
            ratio={aspectRatio}
            className="overflow-hidden rounded-md">
            <Image
              src={album.cover}
              alt={album.name}
              fill
              className="object-cover transition-all hover:scale-105"
            />
          </AspectRatio>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {playlists.map(playlist => (
                <ContextMenuItem key={playlist}>
                  <ListMusic className="mr-2 h-4 w-4" /> {playlist}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {album.artist}
        </p>
      </div>
    </div>
  )
}

interface DemoIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function DemoIndicator({ className }: DemoIndicatorProps) {
  return (
    <span
      className={cn(
        'absolute right-0 top-1 flex h-5 w-5 animate-bounce items-center justify-center',
        className
      )}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500" />
    </span>
  )
}

export default IndexPage
