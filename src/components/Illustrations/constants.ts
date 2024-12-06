import { TIllustrationPictureType } from './types';

import { EPictureNames, EPictureSizes } from './enums';
// ExtraLarge
import BlockExtraLarge from './images/extraLarge/block.svg';
import DefaultExtraLarge from './images/extraLarge/error-page.svg';
import Error404ExtraLarge from './images/extraLarge/page-not-found.svg';
// Large
import NoImageLarge from './images/large/noimage.svg';
// Medium
import CalendarMedium from './images/medium/calendar.svg';
import CatchMedium from './images/medium/catch.svg';
import ChemistryMedium from './images/medium/chemistry.svg';
import CodeMedium from './images/medium/code.svg';
import CommunicationMedium from './images/medium/communication.svg';
import DartMedium from './images/medium/dart.svg';
import Error2Medium from './images/medium/error-2.svg';
import ErrorMedium from './images/medium/error.svg';
import GiveMedium from './images/medium/give.svg';
import GlobusMedium from './images/medium/globus.svg';
import GraphicsMedium from './images/medium/graphics.svg';
import KeyMedium from './images/medium/key.svg';
import LesMedium from './images/medium/les.svg';
import NotesMedium from './images/medium/notes.svg';
import PadenieMedium from './images/medium/padenie.svg';
import QuestionsMedium from './images/medium/questions.svg';
import RateMedium from './images/medium/rate.svg';
import SearchMedium from './images/medium/search.svg';
import TreugolnicMedium from './images/medium/treugolnik.svg';
import VesMedium from './images/medium/ves.svg';
import ZamokMedium from './images/medium/zamok.svg';
// Small
import PictureDefaultSmall from './images/small/picture-default.svg';
import PictureErrorSmall from './images/small/picture-error.svg';
import PictureFactorySmall from './images/small/picture-factory.svg';
import PictureUploadDocSmall from './images/small/picture-upload-doc.svg';
import PictureUploadFactorySmall from './images/small/picture-upload-factory.svg';
import PictureUploadPicSmall from './images/small/picture-upload-pic.svg';
import PictureUploadVideoSmall from './images/small/picture-upload-video.svg';
// Standard
import AnonymousStandard from './images/standard/anonymous.svg';
import BlockStandard from './images/standard/block.svg';
import CalendarStandard from './images/standard/calendar.svg';
import MeetStandard from './images/standard/meet.svg';
import NoImageStandard from './images/standard/noimage.svg';
import PyramidStandard from './images/standard/pyramid.svg';
import RateStandard from './images/standard/rate.svg';
import RostStandard from './images/standard/rost.svg';
import CommunicationStandard from './images/standard/сommunication.svg';
// Tall
import CalendarTall from './images/tall/calendar.svg';
import KeyTall from './images/tall/key.svg';
import LunchTall from './images/tall/lunch.svg';
import NoImageTall from './images/tall/noimage.svg';
import RateTall from './images/tall/rate.svg';
// Wide
import CalendarWide from './images/wide/calendar.svg';
import CoffeeWide from './images/wide/coffee.svg';
import CommunicationWide from './images/wide/communication.svg';
import DocWide from './images/wide/doc.svg';
import EndWide from './images/wide/end.svg';
import Error3Wide from './images/wide/error-3.svg';
import GlobusWide from './images/wide/globus.svg';
import Graphics2Wide from './images/wide/graphics2.svg';
import GraphicsWide from './images/wide/graphics.svg';
import LunchWide from './images/wide/lunch.svg';
import NoImageWide from './images/wide/noimage.svg';
import Padenie2Wide from './images/wide/padenie2.svg';
import PadenieWide from './images/wide/padenie.svg';
import PageNotFoundWide from './images/wide/page-not-found.svg';
import RelaxWide from './images/wide/relax.svg';
import SearchWide from './images/wide/search.svg';
import SleepWide from './images/wide/sleep.svg';
import TimeWide from './images/wide/time.svg';

export const ILLUSTRATION_PICTURES: TIllustrationPictureType = {
  [EPictureSizes.Small]: {
    [EPictureNames.NoImage]: NoImageLarge,
    [EPictureNames.PictureDefault]: PictureDefaultSmall,
    [EPictureNames.PictureError]: PictureErrorSmall,
    [EPictureNames.PictureFactory]: PictureFactorySmall,
    [EPictureNames.PictureUploadDoc]: PictureUploadDocSmall,
    [EPictureNames.PictureUploadFactory]: PictureUploadFactorySmall,
    [EPictureNames.PictureUploadPic]: PictureUploadPicSmall,
    [EPictureNames.PictureUploadVideo]: PictureUploadVideoSmall
  },
  [EPictureSizes.Medium]: {
    [EPictureNames.Calendar]: CalendarMedium,
    [EPictureNames.Catch]: CatchMedium,
    [EPictureNames.Chemistry]: ChemistryMedium,
    [EPictureNames.Code]: CodeMedium,
    [EPictureNames.Communication]: CommunicationMedium,
    [EPictureNames.Dart]: DartMedium,
    [EPictureNames.Error]: ErrorMedium,
    [EPictureNames.Error2]: Error2Medium,
    [EPictureNames.Give]: GiveMedium,
    [EPictureNames.Globus]: GlobusMedium,
    [EPictureNames.Graphics]: GraphicsMedium,
    [EPictureNames.Key]: KeyMedium,
    [EPictureNames.Les]: LesMedium,
    [EPictureNames.NoImage]: NoImageLarge,
    [EPictureNames.Notes]: NotesMedium,
    [EPictureNames.Padenie]: PadenieMedium,
    [EPictureNames.Questions]: QuestionsMedium,
    [EPictureNames.Rate]: RateMedium,
    [EPictureNames.Search]: SearchMedium,
    [EPictureNames.Treugolnic]: TreugolnicMedium,
    [EPictureNames.Ves]: VesMedium,
    [EPictureNames.Zamok]: ZamokMedium
  },
  [EPictureSizes.Wide]: {
    [EPictureNames.Calendar]: CalendarWide,
    [EPictureNames.Coffee]: CoffeeWide,
    [EPictureNames.Communication]: CommunicationWide,
    [EPictureNames.Doc]: DocWide,
    [EPictureNames.End]: EndWide,
    [EPictureNames.Error3]: Error3Wide,
    [EPictureNames.Globus]: GlobusWide,
    [EPictureNames.Graphics]: GraphicsWide,
    [EPictureNames.Graphics2]: Graphics2Wide,
    [EPictureNames.Lunch]: LunchWide,
    [EPictureNames.NoImage]: NoImageWide,
    [EPictureNames.Padenie]: PadenieWide,
    [EPictureNames.Padenie2]: Padenie2Wide,
    [EPictureNames.PageNotFound]: PageNotFoundWide,
    [EPictureNames.Relax]: RelaxWide,
    [EPictureNames.Search]: SearchWide,
    [EPictureNames.Sleep]: SleepWide,
    [EPictureNames.Time]: TimeWide
  },
  [EPictureSizes.Standard]: {
    [EPictureNames.Anonymous]: AnonymousStandard,
    [EPictureNames.Block]: BlockStandard,
    [EPictureNames.Calendar]: CalendarStandard,
    [EPictureNames.Meet]: MeetStandard,
    [EPictureNames.NoImage]: NoImageStandard,
    [EPictureNames.Pyramid]: PyramidStandard,
    [EPictureNames.Rate]: RateStandard,
    [EPictureNames.Rost]: RostStandard,
    [EPictureNames.Communication]: CommunicationStandard
  },
  [EPictureSizes.Tall]: {
    [EPictureNames.Calendar]: CalendarTall,
    [EPictureNames.Key]: KeyTall,
    [EPictureNames.Lunch]: LunchTall,
    [EPictureNames.Rate]: RateTall,
    [EPictureNames.NoImage]: NoImageTall
  },
  [EPictureSizes.ExtraLarge]: {
    [EPictureNames.Error404]: Error404ExtraLarge,
    [EPictureNames.Error]: DefaultExtraLarge,
    [EPictureNames.Block]: BlockExtraLarge,
    [EPictureNames.NoImage]: NoImageLarge
  }
};
