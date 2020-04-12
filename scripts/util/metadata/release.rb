require_relative "commit"
require_relative "../../util/version"

class Release
  include Comparable

  attr_reader :commits,
    :description,
    :date,
    :highlights,
    :last_date,
    :last_version,
    :permalink,
    :subtitle,
    :upgrade_guides,
    :version

  def initialize(release_hash, last_version, last_date, all_highlights)
    @description = release_hash["description"] || ""
    @date = release_hash.fetch("date").to_date
    @last_date = last_date
    @last_version = last_version
    @subtitle = release_hash["subtitle"] || ""

    @upgrade_guides =
      (release_hash["upgrade_guides"] || []).collect do |guide_hash|
        OpenStruct.new(guide_hash)
      end

    @version = Version.new(release_hash.fetch("version"))

    # Post process

    @commits =
      release_hash.fetch("commits").collect do |commit_hash|
        Commit.new(commit_hash)
      end

    @highlights =
      all_highlights.select do |h|
        h.release == version.to_s
      end

    @permalink = "#{RELEASES_HOST}/#{@version}/"
  end

  def <=>(other)
    if other.is_a?(self.class)
      version <=> other.version
    else
      nil
    end
  end

  def authors
    @authors ||= commits.collect(&:author).uniq.sort
  end

  def breaking_changes
    @breaking_changes ||= commits.select(&:breaking_change?)
  end

  def bug_fixes
    @bug_fixes ||= commits.select(&:bug_fix?)
  end

  def compare_short_link
    @compare_short_link ||= "urls.compare_v#{last_version}...v#{version}"
  end

  def compare_url
    @compare_url ||= "https://github.com/timberio/vector/compare/v#{last_version}...v#{version}"
  end

  def deletions_count
    @deletions_count ||= countable_commits.sum(&:deletions_count)
  end

  def doc_updates
    @doc_updates ||= commits.select(&:doc_update?)
  end

  def enhancements
    @enhancements ||= commits.select(&:enhancement?)
  end

  def eql?(other)
    self.<=>(other) == 0
  end

  def files_count
    @files_count ||= countable_commits.sum(&:files_count)
  end

  def hash
    version.hash
  end

  def human_date
    date.strftime("%b %-d, %Y")
  end

  def insertions_count
    @insertions_count ||= countable_commits.sum(&:insertions_count)
  end

  def new_features
    @new_features ||= commits.select(&:new_feature?)
  end

  def major?
    type == "major"
  end

  def minor?
    type == "minor"
  end

  def patch?
    type == "patch"
  end

  def performance_improvements
    @performance_improvements ||= commits.select(&:performance_improvement?)
  end

  def pre?
    type == "pre"
  end

  def title
    @title ||= "Vector v#{version}"
  end

  def to_h
    {
      commits: commits.deep_to_h,
      subtitle: subtitle,
      description: description,
      compare_url: compare_url,
      deletions_count: deletions_count,
      date: date,
      insertions_count: insertions_count,
      last_version: last_version,
      permalink: permalink,
      highlights: highlights.deep_to_h,
      title: title,
      type: type,
      type_url: type_url,
      upgrade_guides: upgrade_guides.deep_to_h,
      version: version,
    }
  end

  def type
    @type ||=
      if version.major == 0
        "initial dev"
      else
        last_version.bump_type(version)
      end
  end

  def type_url
    case type
    when "initial dev"
      "https://semver.org/#spec-item-4"
    when "patch"
      "https://semver.org/#spec-item-6"
    when "minor"
      "https://semver.org/#spec-item-7"
    when "major"
      "https://semver.org/#spec-item-8"
    else
      raise "Unknown release type #{type.inspect}!"
    end
  end

  private
    def countable_commits
      @countable_commits ||= commits.select do |commit|
        !commit.doc_update?
      end
    end
end
