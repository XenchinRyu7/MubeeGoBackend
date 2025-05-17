import BlogPage from '../pages/BlogPage';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import AddBlogPage from '../pages/AddBlogPage';
import GalleryPage from '../pages/GalleryPage';
import GalleryGridPage from '../pages/GalleryGridPage';
import GalleryMasonryPage from '../pages/GalleryMasonryPage';
import GalleryHoverPage from '../pages/GalleryHoverPage';
import CalendarMainPage from '../pages/CalendarMainPage';
import ChatEmptyPage from '../pages/ChatEmptyPage';
import ChatMessagePage from '../pages/ChatMessagePage';
import ChatProfilePage from '../pages/ChatProfilePage';
import CodeGeneratorPage from '../pages/CodeGeneratorPage';
import CodeGeneratorNewPage from '../pages/CodeGeneratorNewPage';
import ImageGeneratorPage from '../pages/ImageGeneratorPage';
import TextGeneratorPage from '../pages/TextGeneratorPage';
import TextGeneratorNewPage from '../pages/TextGeneratorNewPage';
import VideoGeneratorPage from '../pages/VideoGeneratorPage';
import VoiceGeneratorPage from '../pages/VoiceGeneratorPage';
import InvoiceAddPage from '../pages/InvoiceAddPage';
import InvoiceEditPage from '../pages/InvoiceEditPage';
import InvoiceListPage from '../pages/InvoiceListPage';
import InvoicePreviewPage from '../pages/InvoicePreviewPage';
import KanbanPage from '../pages/KanbanPage';
import MarketplacePage from '../pages/MarketplacePage';
import MarketplaceDetailsPage from '../pages/MarketplaceDetailsPage';

const featureRoutes = [
  // Blog Routes
  { path: '/blog', element: <BlogPage /> },
  { path: '/blog-details', element: <BlogDetailsPage /> },
  { path: '/add-blog', element: <AddBlogPage /> },

  // Gallery Routes
  { path: '/gallery', element: <GalleryPage /> },
  { path: '/gallery-grid', element: <GalleryGridPage /> },
  { path: '/gallery-masonry', element: <GalleryMasonryPage /> },
  { path: '/gallery-hover', element: <GalleryHoverPage /> },

  // Calendar Routes
  { path: '/calendar-main', element: <CalendarMainPage /> },
  { path: '/calendar', element: <CalendarMainPage /> },

  // Chat Routes
  { path: '/chat-empty', element: <ChatEmptyPage /> },
  { path: '/chat-message', element: <ChatMessagePage /> },
  { path: '/chat-profile', element: <ChatProfilePage /> },

  // Generator Routes
  { path: '/code-generator', element: <CodeGeneratorPage /> },
  { path: '/code-generator-new', element: <CodeGeneratorNewPage /> },
  { path: '/image-generator', element: <ImageGeneratorPage /> },
  { path: '/text-generator', element: <TextGeneratorPage /> },
  { path: '/text-generator-new', element: <TextGeneratorNewPage /> },
  { path: '/video-generator', element: <VideoGeneratorPage /> },
  { path: '/voice-generator', element: <VoiceGeneratorPage /> },

  // Invoice Routes
  { path: '/invoice-add', element: <InvoiceAddPage /> },
  { path: '/invoice-edit', element: <InvoiceEditPage /> },
  { path: '/invoice-list', element: <InvoiceListPage /> },
  { path: '/invoice-preview', element: <InvoicePreviewPage /> },

  // Other Features
  { path: '/kanban', element: <KanbanPage /> },
  { path: '/marketplace', element: <MarketplacePage /> },
  { path: '/marketplace-details', element: <MarketplaceDetailsPage /> },
];

export default featureRoutes;
