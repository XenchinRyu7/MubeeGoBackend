import AlertPage from "../pages/AlertPage";
import AvatarPage from "../pages/AvatarPage";
import BadgesPage from "../pages/BadgesPage";
import ButtonPage from "../pages/ButtonPage";
import CardPage from "../pages/CardPage";
import CarouselPage from "../pages/CarouselPage";
import ColorsPage from "../pages/ColorsPage";
import DropdownPage from "../pages/DropdownPage";
import FormLayoutPage from "../pages/FormLayoutPage";
import FormValidationPage from "../pages/FormValidationPage";
import FormPage from "../pages/FormPage";
import ListPage from "../pages/ListPage";
import PaginationPage from "../pages/PaginationPage";
import ProgressPage from "../pages/ProgressPage";
import RadioPage from "../pages/RadioPage";
import StarRatingPage from "../pages/StarRatingPage";
import SwitchPage from "../pages/SwitchPage";
import TableBasicPage from "../pages/TableBasicPage";
import TableDataPage from "../pages/TableDataPage";
import TabsPage from "../pages/TabsPage";
import TagsPage from "../pages/TagsPage";
import TooltipPage from "../pages/TooltipPage";
import TypographyPage from "../pages/TypographyPage";
import EmailPage from "../pages/EmailPage";

const componentRoutes = [
  { path: "/email", element: <EmailPage /> },
  { path: "/alert", element: <AlertPage /> },
  { path: "/avatar", element: <AvatarPage /> },
  { path: "/badges", element: <BadgesPage /> },
  { path: "/button", element: <ButtonPage /> },
  { path: "/card", element: <CardPage /> },
  { path: "/carousel", element: <CarouselPage /> },
  { path: "/colors", element: <ColorsPage /> },
  { path: "/dropdown", element: <DropdownPage /> },
  { path: "/form-layout", element: <FormLayoutPage /> },
  { path: "/form-validation", element: <FormValidationPage /> },
  { path: "/form", element: <FormPage /> },
  { path: "/list", element: <ListPage /> },
  { path: "/pagination", element: <PaginationPage /> },
  { path: "/progress", element: <ProgressPage /> },
  { path: "/radio", element: <RadioPage /> },
  { path: "/star-rating", element: <StarRatingPage /> },
  { path: "/switch", element: <SwitchPage /> },
  { path: "/table-basic", element: <TableBasicPage /> },
  { path: "/table-data", element: <TableDataPage /> },
  { path: "/tabs", element: <TabsPage /> },
  { path: "/tags", element: <TagsPage /> },
  { path: "/tooltip", element: <TooltipPage /> },
  { path: "/typography", element: <TypographyPage /> },
];

export default componentRoutes;
